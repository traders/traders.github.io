<script lang="ts">
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
	<title>Join — Traders@MIT</title>
</svelte:head>

<div class="mx-auto max-w-[90rem] px-6 md:px-12 py-16 md:py-24">
	<!-- Page Header -->
	<div class="relative mb-20 md:mb-28">
		<!-- Decorative background text -->
		<span
			class="absolute -top-4 -left-2 md:-top-10 md:-left-4 font-display text-[5rem] md:text-[9rem] lg:text-[12rem] font-[800] leading-none text-stroke text-zinc-800/[0.06] select-none pointer-events-none tracking-tighter"
		>
			JOIN
		</span>

		<div class="relative pt-8 md:pt-14">
			<h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-[800] tracking-[-0.03em] text-zinc-50">
				Join Us
			</h1>
			<div class="mt-5 h-[3px] w-20 bg-gradient-to-r from-green-electric to-amber-accent"></div>
			<p class="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-300 font-light">
				Traders@MIT is a small group of ~25 undergraduate students with a flat structure.
				Every board member contributes meaningfully to the club. No trading experience required.
			</p>
		</div>
	</div>

	<!-- Application Status -->
	<div class="fade-in-section mb-20 md:mb-28" use:fadeIn>
		<div class="relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-10 md:p-14 text-center">
			<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
			<div class="inline-flex items-center gap-2 rounded-full bg-zinc-800/50 px-4 py-1.5 mb-4">
				<span class="h-2 w-2 rounded-full bg-zinc-600"></span>
				<span class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500">Applications Closed</span>
			</div>
			<h3 class="font-display text-2xl md:text-3xl font-[700] text-zinc-50">Fall 2025 Recruitment</h3>
			<p class="mt-3 text-sm text-zinc-300 font-light">
				Applications to join Traders@MIT have closed. Check back in Fall 2026.
			</p>
		</div>
	</div>

	<!-- What Board Members Do — asymmetric grid -->
	<div class="mb-20 md:mb-28">
		<div class="relative mb-12">
			<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/50 block mb-3">Roles</span>
			<h2 class="font-display text-3xl md:text-5xl font-[800] tracking-[-0.02em] text-zinc-50">
				What Board Members Do
			</h2>
			<div class="mt-4 h-[2px] w-12 bg-green-electric/40"></div>
		</div>

		<div class="grid gap-5 md:grid-cols-12 stagger-children" use:fadeIn>
			<!-- Design Cases — large -->
			<div class="md:col-span-7 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-green-electric/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-green-electric to-green-electric/0"></div>
				<div class="flex items-center gap-4 mb-5">
					<div class="flex h-10 w-10 items-center justify-center border border-zinc-700/50 text-green-electric transition-colors duration-300 group-hover:border-green-electric/30">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
						</svg>
					</div>
					<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/40">01</span>
				</div>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Design Trading Cases</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light max-w-lg">
					Create and refine the trading cases used in our annual competition,
					covering market-making, quantitative strategies, and more.
				</p>
			</div>

			<!-- Develop Exchange -->
			<div class="md:col-span-5 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-violet-accent/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-violet-accent to-violet-accent/0"></div>
				<div class="flex items-center gap-4 mb-5">
					<div class="flex h-10 w-10 items-center justify-center border border-zinc-700/50 text-violet-accent transition-colors duration-300 group-hover:border-violet-accent/30">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>
					<span class="font-mono text-xs tracking-[0.25em] uppercase text-violet-accent/40">02</span>
				</div>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Develop the Exchange</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light">
					Build and maintain the trading exchange platform that powers
					the competition, using real-world software engineering practices.
				</p>
			</div>

			<!-- Logistics -->
			<div class="md:col-span-5 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-amber-accent/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-amber-accent to-amber-accent/0"></div>
				<div class="flex items-center gap-4 mb-5">
					<div class="flex h-10 w-10 items-center justify-center border border-zinc-700/50 text-amber-accent transition-colors duration-300 group-hover:border-amber-accent/30">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
						</svg>
					</div>
					<span class="font-mono text-xs tracking-[0.25em] uppercase text-amber-accent/40">03</span>
				</div>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Coordinate Logistics</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light">
					Organize the competition weekend — from venue booking and catering to
					competitor communication and sponsor coordination.
				</p>
			</div>

			<!-- Learn -->
			<div class="md:col-span-7 group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-10 transition-all duration-500 hover:border-green-electric/20">
				<div class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-green-electric/60 to-green-electric/0"></div>
				<div class="flex items-center gap-4 mb-5">
					<div class="flex h-10 w-10 items-center justify-center border border-zinc-700/50 text-green-electric/80 transition-colors duration-300 group-hover:border-green-electric/30">
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
						</svg>
					</div>
					<span class="font-mono text-xs tracking-[0.25em] uppercase text-green-electric/30">04</span>
				</div>
				<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Learn & Grow</h3>
				<p class="mt-4 text-sm leading-relaxed text-zinc-300 font-light max-w-lg">
					Participate in weekly seminars during IAP covering quantitative finance,
					probability, and market microstructure — no experience required.
				</p>
			</div>
		</div>
	</div>

	<!-- Traders Week — creative timeline -->
	<div class="mb-20 md:mb-28 fade-in-section" use:fadeIn>
		<div class="relative mb-12">
			<span class="font-mono text-xs tracking-[0.25em] uppercase text-violet-accent/50 block mb-3">Fall Recruitment</span>
			<h2 class="font-display text-3xl md:text-5xl font-[800] tracking-[-0.02em] text-zinc-50">
				Traders Week
			</h2>
			<div class="mt-4 h-[2px] w-12 bg-violet-accent/40"></div>
			<p class="mt-6 text-sm text-zinc-300 font-light max-w-xl">
				Each fall, we host Traders Week — a series of events to introduce students to the club
				and quantitative finance.
			</p>
		</div>

		<!-- Timeline -->
		<div class="relative">
			<!-- Vertical line -->
			<div class="absolute left-[23px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-green-electric/30 via-violet-accent/20 to-transparent hidden md:block"></div>

			<div class="space-y-4">
				{#each [
					{ num: '01', title: 'Intro to Traders & Q&A', desc: 'Learn about the club and ask questions', color: 'green-electric' },
					{ num: '02', title: 'Poker Night', desc: 'Casual poker tournament and socializing', color: 'green-electric' },
					{ num: '03', title: 'Estimathon', desc: 'Test your estimation skills in a fun competition', color: 'violet-accent' },
					{ num: '04', title: 'Resume Review & Networking', desc: 'Get resume feedback and connect with members', color: 'amber-accent' }
				] as event}
					<div class="group flex items-start gap-6 relative border border-zinc-800/50 bg-zinc-900/20 p-6 md:p-8 transition-all duration-500 hover:border-{event.color}/20 hover:bg-zinc-900/40">
						<!-- Number badge -->
						<div class="flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-700/50 font-mono text-sm font-bold text-zinc-400 transition-all duration-300 group-hover:text-green-electric group-hover:border-green-electric/30">
							{event.num}
						</div>
						<div>
							<h4 class="font-display text-base md:text-lg font-[700] text-zinc-100 transition-colors duration-300 group-hover:text-zinc-50">
								{event.title}
							</h4>
							<p class="mt-1 text-sm text-zinc-400 font-light">{event.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Contact CTA -->
	<div class="relative overflow-hidden border border-green-electric/10 bg-green-electric/[0.02] p-10 md:p-14 text-center fade-in-section" use:fadeIn>
		<div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-electric/30 to-transparent"></div>
		<h3 class="font-display text-xl md:text-2xl font-[700] text-zinc-50">Questions?</h3>
		<p class="mt-4 text-sm text-zinc-300 font-light">
			Reach out to us at
		</p>
		<a
			href="mailto:traders-exec@mit.edu"
			class="mt-4 inline-block font-mono text-sm text-green-electric transition-all duration-300 hover:text-green-bright hover:shadow-[0_0_20px_rgba(0,220,130,0.15)]"
		>
			traders-exec@mit.edu
		</a>
	</div>
</div>
