"""
Process headshots: detect faces, center & normalize head size, output 512×512 JPEG.

Dependencies:
    pip install mediapipe Pillow opencv-python numpy

Usage:
    cd scripts && python process_headshots.py
"""

import urllib.request
from pathlib import Path

import mediapipe as mp
from mediapipe.tasks import python as mp_python
from mediapipe.tasks.python import vision
from PIL import Image, ImageOps

# ── Configuration ────────────────────────────────────────────────────────────
INPUT_DIR = Path(__file__).parent / "headshots"
OUTPUT_DIR = Path(__file__).parent / "processed_headshots"
MODEL_PATH = Path(__file__).parent / "blaze_face_short_range.tflite"
OUTPUT_SIZE = 512  # px, square

# How much space around the face bounding box to keep.
# 1.0 = just the face; higher = more context (head, shoulders).
# ~2.8 works well for a typical professional headshot crop.
FACE_PADDING_FACTOR = 2.8

# Per-person padding overrides (stem name → padding factor).
# Use a higher value to zoom out for people whose default crop is too tight.
PADDING_OVERRIDES: dict[str, float] = {
    "Mia Lu": 3.4,
    "Locke Cai": 3.4,
}

SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".webp"}

MODEL_URL = (
    "https://storage.googleapis.com/mediapipe-models/"
    "face_detector/blaze_face_short_range/float16/1/"
    "blaze_face_short_range.tflite"
)


def ensure_model() -> Path:
    """Download the face detection model if it doesn't exist locally."""
    if MODEL_PATH.exists():
        return MODEL_PATH
    print(f"Downloading face detection model to {MODEL_PATH} ...")
    urllib.request.urlretrieve(MODEL_URL, MODEL_PATH)
    print("Download complete.\n")
    return MODEL_PATH


def create_detector() -> vision.FaceDetector:
    """Create a MediaPipe FaceDetector instance."""
    base_options = mp_python.BaseOptions(model_asset_path=str(MODEL_PATH))
    options = vision.FaceDetectorOptions(
        base_options=base_options,
        min_detection_confidence=0.5,
    )
    return vision.FaceDetector.create_from_options(options)


def detect_face(
    detector: vision.FaceDetector, image_path: str
) -> tuple[int, int, int, int] | None:
    """
    Use MediaPipe Face Detector to find the most prominent face.

    Returns (x_center, y_center, width, height) in pixel coords, or None.
    """
    mp_image = mp.Image.create_from_file(image_path)
    result = detector.detect(mp_image)

    if not result.detections:
        return None

    # Take the detection with the highest confidence
    best = max(result.detections, key=lambda d: d.categories[0].score)
    bb = best.bounding_box

    # bounding_box has origin_x, origin_y, width, height in pixel coords
    fx = bb.origin_x
    fy = bb.origin_y
    fw = bb.width
    fh = bb.height

    cx = fx + fw // 2
    cy = fy + fh // 2

    return cx, cy, fw, fh


def compute_square_crop(
    cx: int,
    cy: int,
    face_w: int,
    face_h: int,
    img_w: int,
    img_h: int,
    padding_factor: float,
) -> tuple[int, int, int, int]:
    """
    Given a face centre and size, compute a square crop region
    that keeps the face centred with the desired padding.

    If the ideal crop would exceed the image dimensions, the crop
    is shrunk (zoomed in) to the largest square that fits entirely
    within the image, then shifted to stay centred on the face.
    This avoids any stretching, squeezing, or artificial fill.

    Returns (left, upper, right, lower).
    """
    # Use the larger face dimension so heads of different aspect ratios
    # end up roughly the same size.
    face_size = max(face_w, face_h)
    crop_side = int(face_size * padding_factor)

    # Clamp to the largest square that fits inside the image
    crop_side = min(crop_side, img_w, img_h)

    # Shift the centre downward slightly so we include more shoulders
    # and don't clip the top of the head.
    cy_shifted = cy + int(face_size * 0.05)

    left = cx - crop_side // 2
    upper = cy_shifted - crop_side // 2
    right = left + crop_side
    lower = upper + crop_side

    # Shift the crop into image bounds (guaranteed to fit because
    # crop_side <= min(img_w, img_h)).
    if left < 0:
        right -= left
        left = 0
    if upper < 0:
        lower -= upper
        upper = 0
    if right > img_w:
        left -= right - img_w
        right = img_w
    if lower > img_h:
        upper -= lower - img_h
        lower = img_h

    return left, upper, right, lower


def process_image(
    detector: vision.FaceDetector, src: Path, dst: Path,
    padding_factor: float = FACE_PADDING_FACTOR,
) -> None:
    """Load an image, detect face, crop, resize, and save as JPEG."""
    # Load with PIL and apply EXIF orientation so pixel layout
    # matches what the user sees (avoids rotation mismatches).
    pil_img = Image.open(src)
    pil_img = ImageOps.exif_transpose(pil_img)
    if pil_img.mode != "RGB":
        pil_img = pil_img.convert("RGB")

    w, h = pil_img.size

    # Detect face using MediaPipe Tasks API
    face = detect_face(detector, str(src))

    if face is not None:
        cx, cy, fw, fh = face
        left, upper, right, lower = compute_square_crop(
            cx, cy, fw, fh, w, h, padding_factor
        )
        print(f"  ✓  Face detected — crop box ({left},{upper})→({right},{lower})")
    else:
        # Fallback: centre-crop the largest square from the image
        print(f"  ⚠  No face detected in {src.name} — using centre crop.")
        side = min(w, h)
        left = (w - side) // 2
        upper = (h - side) // 2
        right = left + side
        lower = upper + side

    # Crop (always a square fully within bounds), then resize
    cropped = pil_img.crop((left, upper, right, lower))
    result = cropped.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.LANCZOS)

    result.save(dst, format="JPEG", quality=92)


def main() -> None:
    if not INPUT_DIR.is_dir():
        print(f"Input directory not found: {INPUT_DIR}")
        return

    # Ensure the model is available
    ensure_model()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Input : {INPUT_DIR}")
    print(f"Output: {OUTPUT_DIR}")
    print()

    files = sorted(
        f for f in INPUT_DIR.iterdir() if f.suffix.lower() in SUPPORTED_EXTENSIONS
    )

    if not files:
        print("No supported images found.")
        return

    print(f"Processing {len(files)} headshot(s)...\n")

    # Create a single detector and reuse it for all images
    detector = create_detector()

    for src in files:
        stem = src.stem  # keep original name, just change extension
        dst = OUTPUT_DIR / f"{stem}.jpg"
        padding = PADDING_OVERRIDES.get(stem, FACE_PADDING_FACTOR)
        label = f"[{src.name}]"
        if stem in PADDING_OVERRIDES:
            label += f"  (custom padding: {padding})"
        print(label)
        process_image(detector, src, dst, padding_factor=padding)
        print()

    print("Done ✓")


if __name__ == "__main__":
    main()
