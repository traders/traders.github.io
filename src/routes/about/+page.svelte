<script lang="ts">
	import { members } from '$lib/data/members';
	import aboutImage from '$lib/assets/about.jpeg';

	const profileImages = import.meta.glob('$lib/assets/profiles/*.jpg', {
		eager: true,
		import: 'default'
	}) as Record<string, string>;

	function getProfileImage(filename: string): string {
		const key = `/src/lib/assets/profiles/${filename}`;
		return profileImages[key] || '';
	}

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
	<title>About — Traders@MIT</title>
</svelte:head>

<div class="mx-auto max-w-[90rem] px-6 md:px-12 py-16 md:py-24">
	<!-- Page Header — editorial style -->
	<div class="relative mb-20 md:mb-28">
		<!-- Large decorative outlined text -->
		<span
			class="absolute -top-6 -left-2 md:-top-12 md:-left-4 font-display text-[6rem] md:text-[10rem] lg:text-[14rem] font-[800] leading-none text-stroke text-zinc-800/[0.08] select-none pointer-events-none tracking-tighter"
		>
			ABOUT
		</span>

		<div class="relative pt-8 md:pt-16 grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
			<!-- Text content -->
			<div class="md:col-span-5">
				<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-[800] tracking-[-0.03em] text-zinc-50">
					About
				</h1>
				<div class="mt-5 h-[3px] w-20 bg-gradient-to-r from-green-electric to-violet-accent"></div>
				<p class="mt-8 text-lg md:text-xl leading-relaxed text-zinc-300 font-light">
					Traders@MIT is MIT's premier undergraduate quantitative finance club. We partner
					with leading trading firms to host the largest intercollegiate trading competition and
					provide our members with exposure to the world of quantitative finance.
				</p>
			</div>

			<!-- Hero image — geometric reveal -->
			<div class="md:col-span-7 relative group">
				<!-- Offset decorative frame -->
				<div class="absolute -top-3 -right-3 w-full h-full border border-green-electric/15 z-0 transition-all duration-700 group-hover:border-green-electric/25"></div>

				<!-- Image with diagonal clip -->
				<div class="relative z-10 overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);">
					<img
						src={aboutImage}
						alt="Traders@MIT members by the ocean"
						class="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
					/>
				<!-- Left-edge gradient to blend into background -->
				<div class="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#050505]/70 to-transparent"></div>
					<!-- Subtle green tint overlay -->
					<div class="absolute inset-0 bg-green-electric/[0.03] mix-blend-overlay"></div>
				</div>

				<!-- Bottom accent line -->
				<div class="absolute -bottom-2 left-[8%] right-0 h-[2px] bg-gradient-to-r from-green-electric/50 via-green-electric/20 to-transparent z-20"></div>

				<!-- Decorative corner bracket bottom-right -->
				<div class="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-green-electric/20 z-20"></div>
			</div>
		</div>
	</div>

	<!-- What We Do — asymmetric grid -->
	<div class="mb-24 md:mb-32 stagger-children" use:fadeIn>
		<div class="grid gap-5 md:grid-cols-12">
			<!-- Competition — large card -->
			<div class="md:col-span-7 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-green-electric/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-green-electric to-green-electric/0"></div>
				<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/60 mb-4 block">01</span>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Competition</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light max-w-lg">
					Each spring, we organize a two-day trading competition that brings together ~120
					students from MIT, Harvard, Princeton, Stanford, CMU, and other top universities.
					Competitors solve two trading cases for $20,000+ in prizes.
				</p>
			</div>

			<!-- Education -->
			<div class="md:col-span-5 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-violet-accent/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-violet-accent to-violet-accent/0"></div>
				<span class="font-mono text-xs tracking-[0.25em] uppercase text-violet-accent/60 mb-4 block">02</span>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Education</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light">
					Throughout the year, we hold internal seminars covering market
					microstructure, quantitative strategies, probability, and other topics in
					quantitative finance. No prior trading experience is required.
				</p>
			</div>

			<!-- Industry -->
			<div class="md:col-span-5 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-amber-accent/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-amber-accent to-amber-accent/0"></div>
				<span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-accent/60 mb-4 block">03</span>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Industry Connections</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light">
					We work closely with industry-leading sponsors who provide mentorship,
					networking opportunities, and career insights.
				</p>
			</div>

			<!-- Community -->
			<div class="md:col-span-7 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-green-electric/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-green-electric/60 to-green-electric/0"></div>
				<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/40 mb-4 block">04</span>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Community</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light max-w-lg">
					As a small group of ~25 undergraduate students with a flat structure, every
					board member contributes meaningfully. We host social events including coffee
					chats, dinners, and retreats.
				</p>
			</div>
		</div>
	</div>

	<!-- Executive Board -->
	<div class="fade-in-section" use:fadeIn>
		<div class="relative mb-12">
			<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/50 block mb-3">Team</span>
			<h2 class="font-display text-3xl md:text-5xl font-[800] tracking-[-0.02em] text-zinc-50">
				Executive Board
			</h2>
			<div class="mt-4 h-[2px] w-12 bg-green-electric/40"></div>
		</div>

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 sm:gap-5">
			{#each members as member}
				<div class="group">
					<div class="relative mb-3 overflow-hidden aspect-square border border-zinc-800/50 bg-zinc-900 transition-all duration-500 group-hover:border-green-electric/30">
						<img
							src={getProfileImage(member.image)}
							alt={member.name}
							class="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
						/>
						<!-- Green overlay on hover -->
						<div class="absolute inset-0 bg-green-electric/0 transition-colors duration-500 group-hover:bg-green-electric/[0.05]"></div>
					</div>
					<p class="text-sm font-medium text-zinc-200">{member.name}</p>
					{#if member.role === 'president'}
						<p class="font-mono text-xs tracking-[0.15em] uppercase text-green-electric/70">President</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Contact -->
	<div class="mt-24 md:mt-32 relative overflow-hidden border border-green-electric/10 bg-green-electric/[0.02] p-10 md:p-14 text-center fade-in-section" use:fadeIn>
		<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-electric/30 to-transparent"></div>
		<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Get in Touch</h3>
		<p class="mt-4 text-sm text-zinc-300 font-light">
			For general inquiries, reach out to us at
		</p>
		<a
			href="mailto:traders-exec@mit.edu"
			class="mt-4 inline-block font-mono text-sm text-green-electric transition-all duration-300 hover:text-green-bright hover:shadow-[0_0_20px_rgba(0,220,130,0.15)]"
		>
			traders-exec@mit.edu
		</a>
	</div>
</div>
