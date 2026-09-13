<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let tradersWeekOpen = $state(false);

	const tradersWeekEvents = [
		{
			title: 'Intro to Traders',
			when: 'Monday, Sep 14 · 7:00–8:00 PM',
			where: 'Room 4-237',
			note: 'Dinner provided'
		},
		{
			title: 'Grid Game',
			when: 'Tuesday, Sep 15 · 6:30–7:45 PM',
			where: 'Rooms 2-143 & 2-147',
			note: 'Dinner provided'
		},
		{
			title: 'Estimathon',
			when: 'Wednesday, Sep 16 · 6:30–7:30 PM',
			where: 'Room 3-370',
			note: 'Dinner provided'
		}
	];
</script>

<section
	class="sticky top-20 z-40 border-b border-green-electric/45 bg-gradient-to-r from-green-electric/20 via-green-electric/[0.07] to-violet-accent/15 shadow-[0_4px_28px_rgba(0,220,130,0.12)] backdrop-blur-md"
	aria-label="Traders Week"
>
	<div class="mx-auto max-w-[90rem] px-6 md:px-12">
		<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2.5 md:justify-between md:py-3">
			<p class="text-center font-display text-sm font-[700] tracking-wide text-zinc-50 md:text-left md:text-base">
				Join us during <span class="text-green-electric">Traders Week!</span>
				<span class="text-zinc-200"> 09/14/26 (Mon) – 09/16/26 (Wed)</span>
			</p>
			<button
				type="button"
				class="inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-green-electric transition-colors hover:text-green-bright"
				aria-expanded={tradersWeekOpen}
				onclick={() => (tradersWeekOpen = !tradersWeekOpen)}
			>
				Learn more
				<svg
					class="h-3.5 w-3.5 transition-transform duration-300 {tradersWeekOpen ? 'rotate-180' : ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
		</div>

		{#if tradersWeekOpen}
			<div
				class="overflow-hidden border-t border-green-electric/30 bg-black/20 pb-5 pt-4"
				transition:slide={{ duration: 350, easing: quintOut }}
			>
				<ul class="grid gap-4 md:grid-cols-3">
					{#each tradersWeekEvents as event, i}
						<li
							class="border border-zinc-800/60 bg-zinc-900/30 p-4 md:p-5"
						>
							<span class="font-mono text-[10px] tracking-[0.2em] uppercase text-green-electric/60"
								>0{i + 1}</span
							>
							<h3 class="mt-2 font-display text-base font-[700] text-zinc-50">{event.title}</h3>
							<p class="mt-2 text-sm text-zinc-300">{event.when}</p>
							<p class="mt-1 text-sm text-zinc-400">{event.where}</p>
							<p class="mt-2 text-xs font-medium text-green-electric/80">{event.note}</p>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>
