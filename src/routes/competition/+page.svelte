<script lang="ts">
	import { competitionImages } from '$lib/data/competition';
	import competitionHero from '$lib/assets/competition.jpg';

	const galleryImages = import.meta.glob('$lib/assets/competition/*.jpg', {
		eager: true,
		import: 'default'
	}) as Record<string, string>;

	function getCompImage(filename: string): string {
		const key = `/src/lib/assets/competition/${filename}`;
		return galleryImages[key] || '';
	}

	// ── Application deadline config ──────────────────────────────
	const applicationDeadline = new Date('2026-02-01T23:59:59-05:00');
	const competitionDates = 'April 25–26, 2026';
	const competitionYear = 'Spring 2026';
	const applyLink = 'https://forms.gle/gBcBuDJfna9rvqUZ8';

	const now = new Date();
	const isApplicationOpen = now < applicationDeadline;

	const deadlineDisplay = applicationDeadline.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'America/New_York'
	});

	// ── Gallery carousel ─────────────────────────────────────────
	let currentSlide = $state(0);
	let galleryInterval: ReturnType<typeof setInterval>;

	function startAutoRotate() {
		galleryInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % competitionImages.length;
		}, 4000);
	}

	function goToSlide(index: number) {
		currentSlide = index;
		clearInterval(galleryInterval);
		startAutoRotate();
	}

	function nextSlide() {
		goToSlide((currentSlide + 1) % competitionImages.length);
	}

	function prevSlide() {
		goToSlide((currentSlide - 1 + competitionImages.length) % competitionImages.length);
	}

	$effect(() => {
		startAutoRotate();
		return () => clearInterval(galleryInterval);
	});

	function fadeIn(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('in-view');
						observer.unobserve(node);
					}
				});
			},
			{ threshold: 0.1 }
		);
		observer.observe(node);
		return { destroy() { observer.disconnect(); } };
	}
</script>

<svelte:head>
	<title>Competition — Traders@MIT</title>
</svelte:head>

<div class="mx-auto max-w-[90rem] px-6 md:px-12 py-16 md:py-24">
	<!-- Page Header -->
	<div class="relative mb-20 md:mb-28">
		<!-- Decorative background text -->
		<span
			class="absolute -top-4 -left-2 md:-top-10 md:-left-4 font-display text-[5rem] md:text-[9rem] lg:text-[12rem] font-[800] leading-none text-stroke text-zinc-800/[0.06] select-none pointer-events-none tracking-tighter"
		>
			18TH
		</span>

		<div class="relative pt-8 md:pt-14 grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
			<!-- Text content -->
			<div class="md:col-span-6">
				<div class="flex items-center gap-4 mb-5">
					<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/70">18th Annual</span>
					<div class="h-[1px] w-12 bg-green-electric/30"></div>
				</div>
				<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-[800] tracking-[-0.03em] text-zinc-50">
					Trading<br/>
					<span class="text-gradient-green">Competition</span>
				</h1>
				<p class="mt-8 text-lg md:text-xl leading-relaxed text-zinc-300 font-light">
					The largest intercollegiate trading competition, bringing together top students from
					universities across the country.
				</p>
			</div>

			<!-- Hero image — geometric reveal -->
			<div class="md:col-span-6 relative group">
				<!-- Offset decorative frame -->
				<div class="absolute -top-3 -right-3 w-full h-full border border-green-electric/15 z-0 transition-all duration-700 group-hover:border-green-electric/25"></div>

				<!-- Image with diagonal clip -->
				<div class="relative z-10 overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 100%);">
					<img
						src={competitionHero}
						alt="Trading competition winners with prize check"
						class="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
					/>
				<!-- Left-edge gradient to blend into background -->
				<div class="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#050505]/70 to-transparent"></div>
					<!-- Subtle green tint overlay -->
					<div class="absolute inset-0 bg-green-electric/[0.03] mix-blend-overlay"></div>
				</div>

				<!-- Bottom accent line -->
				<div class="absolute -bottom-2 left-[6%] right-0 h-[2px] bg-gradient-to-r from-green-electric/50 via-green-electric/20 to-transparent z-20"></div>

				<!-- Decorative corner bracket bottom-right -->
				<div class="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-green-electric/20 z-20"></div>
			</div>
		</div>
	</div>

	<!-- Competition Details — asymmetric -->
	<div class="mb-20 md:mb-28 grid gap-5 md:grid-cols-12 stagger-children" use:fadeIn>
		<!-- Details -->
		<div class="md:col-span-7 relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10">
			<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-green-electric to-green-electric/0"></div>
			<h3 class="font-display text-xl font-[700] text-zinc-50 mb-6">Details</h3>
			<dl class="space-y-5">
				<div class="flex items-start gap-6">
					<dt class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 w-24 shrink-0 pt-0.5">Date</dt>
					<dd class="text-sm text-zinc-200">{competitionDates}</dd>
				</div>
				<div class="h-[1px] bg-zinc-800/50"></div>
				<div class="flex items-start gap-6">
					<dt class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 w-24 shrink-0 pt-0.5">Location</dt>
					<dd class="text-sm text-zinc-200">MIT Campus, Cambridge, MA</dd>
				</div>
				<div class="h-[1px] bg-zinc-800/50"></div>
				<div class="flex items-start gap-6">
					<dt class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 w-24 shrink-0 pt-0.5">Format</dt>
					<dd class="text-sm text-zinc-200">Two trading cases released during the competition</dd>
				</div>
				<div class="h-[1px] bg-zinc-800/50"></div>
				<div class="flex items-start gap-6">
					<dt class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 w-24 shrink-0 pt-0.5">Prizes</dt>
					<dd class="text-sm font-semibold text-green-electric">$20,000+ USD</dd>
				</div>
			</dl>
		</div>

		<!-- What to Expect -->
		<div class="md:col-span-5 relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10">
			<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-violet-accent to-violet-accent/0"></div>
			<h3 class="font-display text-xl font-[700] text-zinc-50 mb-6">What to Expect</h3>
			<ul class="space-y-4">
				{#each [
					'~120 students from MIT, Harvard, Princeton, Stanford, CMU, and more',
					'Two-day event with cases designed by our board',
					'Breakfast, lunch, and housing provided',
					'Networking opportunities with sponsor firms',
					'Compete individually or in teams'
				] as item}
					<li class="flex items-start gap-3">
						<span class="mt-2 h-1 w-1 shrink-0 bg-green-electric rotate-45"></span>
						<span class="text-sm leading-relaxed text-zinc-300 font-light">{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Application Status -->
	<div class="fade-in-section mb-20 md:mb-28" use:fadeIn>
		{#if isApplicationOpen}
			<div class="relative overflow-hidden border border-green-electric/20 bg-green-electric/[0.03] p-10 md:p-14 text-center">
				<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-electric/40 to-transparent"></div>

				<!-- Decorative corner -->
				<div class="absolute top-4 right-4 w-12 h-12 border-t border-r border-green-electric/15"></div>

				<div class="inline-flex items-center gap-2 rounded-full bg-green-electric/10 px-4 py-1.5 mb-4">
					<span class="h-2 w-2 animate-pulse rounded-full bg-green-electric"></span>
					<span class="font-mono text-xs tracking-[0.2em] uppercase text-green-electric">Applications Open</span>
				</div>
				<h3 class="font-display text-2xl md:text-3xl font-[700] text-zinc-50">{competitionYear} Competition</h3>
				<p class="mt-3 text-sm text-zinc-300 font-light">
					Application deadline: {deadlineDisplay} at 11:59 PM ET
				</p>
				<a
					href={applyLink}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-8 inline-block bg-green-electric px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#050505] transition-all duration-300 hover:bg-green-bright hover:shadow-[0_0_50px_rgba(0,220,130,0.25)] active:scale-[0.97]"
				>
					Apply Now
				</a>
			</div>
		{:else}
			<div class="relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-10 md:p-14 text-center">
				<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
				<div class="inline-flex items-center gap-2 rounded-full bg-zinc-800/50 px-4 py-1.5 mb-4">
					<span class="h-2 w-2 rounded-full bg-zinc-600"></span>
					<span class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500">Applications Closed</span>
				</div>
				<h3 class="font-display text-2xl md:text-3xl font-[700] text-zinc-50">{competitionYear} Competition</h3>
				<p class="mt-3 text-sm text-zinc-300 font-light">
					Applications for the {competitionYear} competition have closed. Stay tuned for updates.
				</p>
			</div>
		{/if}
	</div>

	<!-- Photo Gallery -->
	<div class="fade-in-section" use:fadeIn>
		<div class="relative mb-10">
			<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/50 block mb-3">Photos</span>
			<h2 class="font-display text-3xl md:text-5xl font-[800] tracking-[-0.02em] text-zinc-50">Gallery</h2>
			<div class="mt-4 h-[2px] w-12 bg-green-electric/40"></div>
		</div>

		<div class="relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20">
			<!-- Main image -->
			<div class="relative aspect-[16/9] w-full">
				{#each competitionImages as image, i}
					<img
						src={getCompImage(image)}
						alt="Competition photo {i + 1}"
						class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700
							{i === currentSlide ? 'opacity-100' : 'opacity-0'}"
					/>
				{/each}

				<!-- Navigation arrows -->
				<button
					onclick={prevSlide}
					class="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-[#050505]/70 text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:bg-green-electric hover:text-[#050505]"
					aria-label="Previous image"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>
				<button
					onclick={nextSlide}
					class="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-[#050505]/70 text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:bg-green-electric hover:text-[#050505]"
					aria-label="Next image"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<!-- Slide counter -->
				<div class="absolute bottom-4 right-4 bg-[#050505]/70 backdrop-blur-sm px-4 py-2">
					<span class="font-mono text-xs text-zinc-300">
						<span class="text-green-electric">{String(currentSlide + 1).padStart(2, '0')}</span>
						<span class="text-zinc-600 mx-1">/</span>
						<span class="text-zinc-500">{String(competitionImages.length).padStart(2, '0')}</span>
					</span>
				</div>
			</div>

			<!-- Dot indicators -->
			<div class="flex items-center justify-center gap-2 py-5 bg-[#050505]/50">
				{#each competitionImages as _, i}
					<button
						onclick={() => goToSlide(i)}
						class="h-[3px] transition-all duration-500
							{i === currentSlide ? 'w-8 bg-green-electric' : 'w-3 bg-zinc-700 hover:bg-zinc-500'}"
						aria-label="Go to slide {i + 1}"
					></button>
				{/each}
			</div>
		</div>
	</div>
</div>
