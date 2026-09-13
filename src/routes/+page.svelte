<script lang="ts">
	import groupPhoto from '$lib/assets/group.jpg';
	import { sponsors } from '$lib/data/sponsors';

	// Dynamic imports for sponsor logos (for ticker)
	const sponsorLogos = import.meta.glob('$lib/assets/sponsors/*.{png,svg,jpg}', {
		eager: true,
		import: 'default'
	}) as Record<string, string>;

	function getSponsorLogo(filename: string): string {
		const key = `/src/lib/assets/sponsors/${filename}`;
		return sponsorLogos[key] || '';
	}

	// Scroll-triggered animation
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
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<svelte:head>
	<title>Traders@MIT — MIT's Premier Quantitative Finance Club</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[100vh] overflow-hidden flex items-center">
	<!-- Background grid -->
	<div class="hero-grid absolute inset-0"></div>

	<!-- Diagonal accent lines -->
		<!--<div
			class="absolute top-[-20%] right-[38%] w-[1px] h-[160%] bg-gradient-to-b from-transparent via-green-electric/15 to-transparent origin-center"
			style="transform: rotate(20deg);"
		></div>
		<div
			class="absolute top-[-20%] right-[37.5%] w-[1px] h-[160%] bg-gradient-to-b from-transparent via-violet-accent/8 to-transparent origin-center"
			style="transform: rotate(20deg);"
		></div>
	-->

	<!-- Floating decorative elements -->
	<!--
		<div
			class="absolute top-32 right-[12%] w-52 h-52 rounded-full border border-green-electric/[0.06] animate-float hidden md:block"
		></div>
		<div
			class="absolute bottom-40 right-[22%] w-20 h-20 border border-violet-accent/[0.08] rotate-45 animate-float-delayed hidden md:block"
		></div>
		<div class="absolute top-[55%] left-[8%] w-3 h-3 bg-green-electric/20 rotate-45 hidden md:block"></div>
		<div class="absolute top-[25%] right-[6%] w-2 h-2 bg-violet-accent/20 rounded-full hidden md:block"></div>
	-->

	<!-- Glow effects -->
	<div class="absolute right-[-15%] top-[5%] h-[700px] w-[700px] rounded-full bg-green-electric/[0.04] blur-[180px]"></div>
	<div class="absolute left-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-violet-accent/[0.025] blur-[150px]"></div>

	<div class="relative z-10 w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
		<div class="mx-auto max-w-[85rem]">
			<!-- Badge -->
			<div
				class="mb-10 inline-flex items-center gap-3 rounded-full border border-green-electric/20 bg-green-electric/[0.05] px-5 py-2.5"
			>
				<span class="h-2 w-2 rounded-full bg-green-electric shadow-[0_0_12px_rgba(0,220,130,0.5)]"></span>
				<span class="font-mono text-xs font-medium tracking-[0.25em] uppercase text-green-electric/80"
					>MIT's Premier Quant Finance Club</span
				>
			</div>

			<!-- Main title — massive, asymmetric -->
			<h1 class="relative">
				<span
					class="block font-display text-[clamp(4.5rem,15vw,13rem)] font-[800] leading-[0.82] tracking-[-0.04em] text-stroke text-green-electric"
				>
					TRADERS
				</span>
			<span
				class="block mt-2 ml-1 md:ml-3 text-[clamp(2.5rem,8vw,6.5rem)] font-[300] leading-[0.9] tracking-[-0.02em]"
				style="font-family: 'Open Sans Condensed', sans-serif;"
			>
				<span class="text-green-electric">@</span><span class="text-white">MIT</span>
			</span>
			</h1>

			<!-- Tagline — offset to the right for asymmetry -->
			<div class="mt-14 md:mt-20 md:ml-auto md:max-w-lg lg:max-w-xl md:mr-[5%]">
				<p class="text-lg md:text-xl lg:text-2xl text-zinc-300 leading-relaxed font-light">
					Partnering with leading trading firms to host the
					<span class="text-zinc-100 font-medium">largest intercollegiate trading competition</span>.
				</p>

				<!-- CTAs — sharp, bold buttons -->
				<div class="mt-10 flex flex-wrap items-center gap-5">
					<a
						href="/competition"
						class="group relative inline-flex items-center gap-3 bg-green-electric px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#050505] transition-all duration-300 hover:bg-green-bright hover:shadow-[0_0_50px_rgba(0,220,130,0.25)] active:scale-[0.97]"
					>
						<span>Competition</span>
						<svg
							class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2.5"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
					<a
						href="/about"
						class="inline-flex items-center px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-zinc-300 border border-zinc-600 transition-all duration-300 hover:text-zinc-100 hover:border-zinc-400 active:scale-[0.97]"
					>
						About Us
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sponsor Marquee Ticker -->
<div class="border-y border-zinc-800/40 py-8 overflow-hidden relative bg-[#050505]">
	<div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
	<div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
	<div class="flex whitespace-nowrap items-center">
		{#each { length: 2 } as _}
			<div class="flex shrink-0 animate-marquee items-center">
			{#each sponsors as sponsor}
				<a href={sponsor.url} target="_blank" rel="noopener noreferrer" class="mx-8 shrink-0">
					<img
						src={getSponsorLogo(sponsor.logo)}
						alt={sponsor.name}
						class="h-20 w-auto max-w-[220px] object-contain opacity-30 transition-opacity duration-300 hover:opacity-60 {sponsor.logo !== 'hrt.png' ? 'brightness-0 invert' : ''}"
						style={sponsor.logo === 'hrt.png' ? 'filter: url(#remove-white) brightness(0) invert(1)' : ''}
					/>
				</a>
				<span class="text-green-electric/20 text-[6px]">◆</span>
			{/each}
			</div>
		{/each}
	</div>
</div>

<!-- Group Photo Section -->
<section class="relative py-20 md:py-28 px-6 md:px-12" use:fadeIn>
	<div class="fade-in-section mx-auto max-w-6xl" use:fadeIn>
		<div class="relative">
			<!-- Decorative corner frames -->
			<div class="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-green-electric/25 z-10"></div>
			<div class="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-violet-accent/25 z-10"></div>

			<!-- Subtle glow behind image -->
			<div class="absolute -inset-8 bg-green-electric/[0.02] blur-3xl rounded-3xl"></div>

			<div class="relative overflow-hidden">
				<img
					src={groupPhoto}
					alt="Traders@MIT team"
					class="w-full object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent"></div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section — staggered, massive numbers -->
<section class="py-20 md:py-32 px-6 md:px-12">
	<div class="mx-auto max-w-6xl stagger-children" use:fadeIn>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
			<!-- Stat 1 -->
			<div class="relative pl-6">
				<div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-electric to-green-electric/0"></div>
				<span class="block font-mono text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-green-electric leading-none">
					$20K<span class="text-green-electric/25">+</span>
				</span>
				<span class="block mt-4 font-mono text-xs tracking-[0.25em] uppercase text-zinc-400">In Competition Prizes</span>
			</div>

			<!-- Stat 2 — offset down -->
			<div class="relative pl-6 md:mt-16">
				<div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-accent to-violet-accent/0"></div>
				<span class="block font-mono text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-zinc-100 leading-none">
					120<span class="text-green-electric/25">+</span>
				</span>
				<span class="block mt-4 font-mono text-xs tracking-[0.25em] uppercase text-zinc-400">Competitors Annually</span>
			</div>

			<!-- Stat 3 — offset more -->
			<div class="relative pl-6 md:mt-32">
				<div class="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-accent to-amber-accent/0"></div>
				<span class="block font-mono text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-zinc-100 leading-none">
					25<span class="text-green-electric/25">+</span>
				</span>
				<span class="block mt-4 font-mono text-xs tracking-[0.25em] uppercase text-zinc-400">Universities Represented</span>
			</div>
		</div>
	</div>
</section>

<!-- Quick Links — asymmetric grid -->
<section class="py-20 md:py-28 px-6 md:px-12">
	<div class="mx-auto max-w-6xl" use:fadeIn>
		<div class="fade-in-section grid md:grid-cols-12 gap-5" use:fadeIn>
			<!-- Large card — Compete -->
			<a
				href="/competition"
				class="group relative md:col-span-7 overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-10 md:p-14 transition-all duration-500 hover:border-green-electric/30 hover:bg-zinc-900/40"
			>
				<!-- Animated top line -->
				<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-electric via-green-electric/50 to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>

				<!-- Icon -->
				<div class="mb-6 flex h-12 w-12 items-center justify-center border border-zinc-700 text-green-electric transition-all duration-500 group-hover:border-green-electric/40 group-hover:shadow-[0_0_20px_rgba(0,220,130,0.1)]">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
					</svg>
				</div>

				<h3 class="font-display text-2xl font-[700] text-zinc-100 transition-colors duration-300 group-hover:text-green-electric">
					Compete
				</h3>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 font-light">
					Compete for $20,000+ in prizes at our annual intercollegiate trading competition. Two days of intensive market simulations.
				</p>

				<!-- Arrow -->
				<div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-green-electric/60 transition-colors duration-300 group-hover:text-green-electric">
					<span>Learn more</span>
					<svg class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</div>
			</a>

			<!-- Stacked right column -->
			<div class="md:col-span-5 flex flex-col gap-5">
				<!-- Sponsors card -->
				<a
					href="/sponsors"
					class="group relative flex-1 overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-violet-accent/30 hover:bg-zinc-900/40"
				>
					<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-accent via-violet-accent/50 to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>

					<div class="mb-5 flex h-10 w-10 items-center justify-center border border-zinc-700 text-violet-accent transition-all duration-500 group-hover:border-violet-accent/40">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>

					<h3 class="font-display text-lg font-[700] text-zinc-100 transition-colors duration-300 group-hover:text-violet-accent">
						Sponsors
					</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-400 font-light">
						Connect with the industry's leading quantitative trading firms.
					</p>
				</a>

				<!-- Join card -->
				<a
					href="/join"
					class="group relative flex-1 overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-amber-accent/30 hover:bg-zinc-900/40"
				>
					<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-accent via-amber-accent/50 to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>

					<div class="mb-5 flex h-10 w-10 items-center justify-center border border-zinc-700 text-amber-accent transition-all duration-500 group-hover:border-amber-accent/40">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
						</svg>
					</div>

					<h3 class="font-display text-lg font-[700] text-zinc-100 transition-colors duration-300 group-hover:text-amber-accent">
						Join Us
					</h3>
					<p class="mt-2 text-sm leading-relaxed text-zinc-400 font-light">
						Join our executive board: design cases, build the exchange, and run the competition.
					</p>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-grid {
		background-image:
			linear-gradient(rgba(0, 220, 130, 0.02) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 220, 130, 0.02) 1px, transparent 1px);
		background-size: 80px 80px;
	}
</style>
