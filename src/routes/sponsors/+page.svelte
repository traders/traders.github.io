<script lang="ts">
	import { tiers, tierLabels, getSponsorsByTier } from '$lib/data/sponsors';
	import type { Sponsor } from '$lib/data/sponsors';

	const sponsorLogos = import.meta.glob('$lib/assets/sponsors/*.{png,svg,jpg}', {
		eager: true,
		import: 'default'
	}) as Record<string, string>;

	function getSponsorLogo(filename: string): string {
		const key = `/src/lib/assets/sponsors/${filename}`;
		return sponsorLogos[key] || '';
	}

	const tierStyles: Record<
		string,
		{
			badge: string;
			badgeIcon: string;
			logoSize: string;
			grid: string;
			lineColor: string;
			accentColor: string;
			borderHover: string;
			padding: string;
		}
	> = {
	diamond: {
		badge: 'text-sky-300 border-sky-400/25 bg-sky-400/[0.06]',
		badgeIcon: '◆',
		logoSize: 'h-16 md:h-20',
		grid: 'grid-cols-2 md:grid-cols-4',
		lineColor: 'from-sky-400/30',
		accentColor: 'sky-400',
		borderHover: 'hover:border-sky-400/30',
		padding: 'p-4 md:p-6'
	},
	platinum: {
		badge: 'text-violet-300 border-violet-400/25 bg-violet-400/[0.06]',
		badgeIcon: '⬡',
		logoSize: 'h-12 md:h-16',
		grid: 'grid-cols-2 md:grid-cols-3',
		lineColor: 'from-violet-400/25',
		accentColor: 'violet-400',
		borderHover: 'hover:border-violet-400/30',
		padding: 'p-4 md:p-6'
	},
	gold: {
		badge: 'text-amber-300 border-amber-400/25 bg-amber-400/[0.06]',
		badgeIcon: '●',
		logoSize: 'h-10 md:h-14',
		grid: 'grid-cols-2 md:grid-cols-4',
		lineColor: 'from-amber-400/20',
		accentColor: 'amber-400',
		borderHover: 'hover:border-amber-400/30',
		padding: 'p-3 md:p-4'
	},
	goldsilver: {
		badge: 'text-zinc-300 border-zinc-400/20 bg-amber-400/[0.03]',
		badgeIcon: '◐',
		logoSize: 'h-9 md:h-13',
		grid: 'grid-cols-2 md:grid-cols-4',
		lineColor: 'from-zinc-400/18',
		accentColor: 'zinc-400',
		borderHover: 'hover:border-zinc-400/28',
		padding: 'p-3 md:p-4'
	},
	silver: {
		badge: 'text-slate-300 border-slate-400/20 bg-slate-400/[0.04]',
		badgeIcon: '○',
		logoSize: 'h-8 md:h-12',
		grid: 'grid-cols-2 md:grid-cols-5',
		lineColor: 'from-slate-400/15',
		accentColor: 'slate-400',
		borderHover: 'hover:border-slate-400/25',
		padding: 'p-3 md:p-4'
	}
	};

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
	<title>Sponsors — Traders@MIT</title>
</svelte:head>

<div class="mx-auto max-w-[90rem] px-6 md:px-12 py-16 md:py-24">
	<!-- Page Header -->
	<div class="relative mb-20 md:mb-28">
		<!-- Decorative background text -->
		<span
			class="absolute -top-4 -left-2 md:-top-10 md:-left-4 font-display text-[5rem] md:text-[9rem] lg:text-[12rem] font-[800] leading-none text-stroke text-zinc-800/[0.06] select-none pointer-events-none tracking-tighter"
		>
			SPONSORS
		</span>

		<div class="relative pt-8 md:pt-14">
			<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-[800] tracking-[-0.03em] text-zinc-50">
				Sponsors
			</h1>
			<div class="mt-5 h-[3px] w-20 bg-gradient-to-r from-green-electric to-violet-accent"></div>
			<p class="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-300 font-light">
				Our sponsors are essential to making the competition and our events possible. We are
				grateful for their continued support.
			</p>
			<p class="mt-3 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500">
				2025–2026 Season
			</p>
		</div>
	</div>

	<!-- Sponsor Tiers -->
	<div class="space-y-16">
		{#each tiers as tier}
			{@const tierSponsors = getSponsorsByTier(tier)}
			{#if tierSponsors.length > 0}
				<section class="fade-in-section" use:fadeIn>
					<!-- Tier Label -->
					<div class="mb-8 flex items-center gap-4">
						<span
							class="inline-flex items-center gap-2 border px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] {tierStyles[tier].badge}"
						>
							<span class="text-xs">{tierStyles[tier].badgeIcon}</span>
							{tierLabels[tier]}
						</span>
						<div class="h-[1px] flex-1 bg-gradient-to-r {tierStyles[tier].lineColor} to-transparent"></div>
					</div>

					<!-- Sponsor Grid -->
					<div class="grid gap-4 {tierStyles[tier].grid}">
						{#each tierSponsors as sponsor}
							<a
								href={sponsor.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center justify-center bg-white/95 {tierStyles[tier].padding} border border-zinc-200/10 transition-all duration-300 {tierStyles[tier].borderHover} hover:bg-white hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5"
								title={sponsor.name}
							>
								<img
									src={getSponsorLogo(sponsor.logo)}
									alt={sponsor.name}
									class="{tierStyles[tier].logoSize} w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
								/>
							</a>
						{/each}
					</div>
				</section>
			{/if}
		{/each}
	</div>

	<!-- Sponsorship CTA -->
	<div class="mt-24 md:mt-32 relative overflow-hidden border border-green-electric/10 bg-green-electric/[0.02] p-10 md:p-14 text-center fade-in-section" use:fadeIn>
		<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-electric/30 to-transparent"></div>
		<!-- Decorative corners -->
		<div class="absolute top-4 left-4 w-8 h-8 border-t border-l border-green-electric/15"></div>
		<div class="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-green-electric/15"></div>

		<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Interested in Sponsoring?</h3>
		<p class="mt-3 text-sm text-zinc-300 font-light">
			Learn more about sponsorship opportunities by reaching out to us.
		</p>
		<a
			href="mailto:traders-sponsorships@mit.edu"
			class="mt-8 inline-block border border-green-electric/30 bg-green-electric/[0.05] px-8 py-4 font-mono text-sm text-green-electric transition-all duration-300 hover:bg-green-electric/10 hover:border-green-electric/50 hover:shadow-[0_0_30px_rgba(0,220,130,0.1)] active:scale-[0.97]"
		>
			traders-sponsorships@mit.edu
		</a>
	</div>
</div>
