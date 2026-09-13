<script lang="ts">
	import '../app.css';
	import TradersWeekBanner from '$lib/components/TradersWeekBanner.svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import logo from '$lib/assets/logo.png';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/competition', label: 'Competition' },
		{ href: '/sponsors', label: 'Sponsors' },
		{ href: '/join', label: 'Join' }
	];

	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Traders@MIT</title>
	<meta
		name="description"
		content="MIT's premier undergraduate quantitative finance club. Hosting the largest intercollegiate trading competition."
	/>
</svelte:head>

<!-- SVG filter: makes white pixels transparent (used for HRT logo in ticker) -->
<svg class="absolute h-0 w-0" aria-hidden="true">
	<defs>
		<filter id="remove-white" color-interpolation-filters="sRGB">
			<feColorMatrix type="matrix" values="
				1 0 0 0 0
				0 1 0 0 0
				0 0 1 0 0
				0 0.234 -1.234 1 0
			" />
		</filter>
	</defs>
</svg>

<!-- Navigation -->
<nav class="fixed top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-2xl">
	<div class="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-6 md:px-12">
		<a href="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
			<img src={logo} alt="Traders@MIT" class="h-8 w-auto" />
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="relative px-5 py-2 font-mono text-[15px] font-medium uppercase tracking-[0.2em] transition-colors duration-300
						{$page.url.pathname === item.href
						? 'text-green-electric'
						: 'text-zinc-400 hover:text-zinc-200'}"
				>
					{item.label}
					{#if $page.url.pathname === item.href}
						<span class="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 bg-green-electric"></span>
					{/if}
				</a>
			{/each}
		</div>

		<!-- Mobile hamburger -->
		<button
			class="flex h-10 w-10 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-200 md:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Bottom accent line -->
	<div class="h-[1px] w-full bg-gradient-to-r from-transparent via-green-electric/20 to-transparent"></div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div
			transition:slide={{ duration: 300, easing: quintOut }}
			class="border-t border-zinc-800/50 bg-[#050505]/95 backdrop-blur-2xl md:hidden overflow-hidden"
		>
			<div class="space-y-1 px-6 py-4">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={() => (mobileMenuOpen = false)}
						class="flex items-center gap-3 py-3 font-mono text-[15px] font-medium uppercase tracking-[0.2em] transition-colors
							{$page.url.pathname === item.href
							? 'text-green-electric'
							: 'text-zinc-400 hover:text-zinc-200'}"
					>
						{#if $page.url.pathname === item.href}
							<span class="h-[2px] w-3 bg-green-electric"></span>
						{/if}
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<!-- Main content -->
<main class="min-h-screen pt-20">
	<TradersWeekBanner />
	{@render children()}
</main>

<!-- Footer -->
<footer class="relative overflow-hidden border-t border-zinc-800/50 bg-[#050505]">
	<!-- Large decorative watermark -->
	<div class="absolute -bottom-16 -right-8 font-display text-[12rem] font-[800] leading-none text-zinc-900/[0.15] select-none pointer-events-none tracking-tighter">
		T.
	</div>

	<div class="relative mx-auto max-w-[90rem] px-6 py-16 md:px-12">
		<div class="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
			<!-- Brand -->
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-3">
					<img src={logo} alt="Traders@MIT" class="h-6 w-auto opacity-70" />
					<div class="h-4 w-[1px] bg-zinc-800"></div>
					<span class="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500">MIT's Premier Quant Finance Club</span>
				</div>
			<div class="flex gap-6 mt-2 items-center">
				<a
					href="mailto:traders-exec@mit.edu"
				class="font-mono text-xs text-zinc-500 transition-colors duration-300 hover:text-green-electric"
			>
				traders-exec@mit.edu
				</a>
				<a
					href="mailto:traders-sponsorships@mit.edu"
				class="font-mono text-xs text-zinc-500 transition-colors duration-300 hover:text-green-electric"
			>
				traders-sponsorships@mit.edu
				</a>
				<a
					href="https://www.instagram.com/tradersatmit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					target="_blank"
					rel="noopener noreferrer"
					class="text-zinc-500 transition-colors duration-300 hover:text-green-electric"
					aria-label="Instagram"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
				</a>
			</div>
			</div>

			<!-- Nav links -->
			<div class="flex flex-wrap gap-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>

		<div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/30 pt-8 md:flex-row md:items-center">
			<p class="font-mono text-xs tracking-wider text-zinc-500">&copy; {new Date().getFullYear()} Traders@MIT</p>
			<a
				href="https://accessibility.mit.edu/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-mono text-xs tracking-wider text-zinc-500 transition-colors hover:text-zinc-300"
			>
				Accessibility
			</a>
		</div>
	</div>
</footer>
