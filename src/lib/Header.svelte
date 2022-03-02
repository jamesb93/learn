<script>
	import Search from '$lib/components/Search.svelte';
	import Hamburger from '$lib/components/Hamburger.svelte';
	
	let w;
	const breakpoint = 1200;
	let userExpand = false;
	const expandHandler = () => {
		userExpand = !userExpand;
	};

	$: navExpand = w >= breakpoint || userExpand;
</script>

<header class="container" role="navigation">
	{#if w<breakpoint}<Hamburger on:click={expandHandler} />{/if}
	<a class="logo-link" href="/"><img class="logo" src="/img/onlylogo.svg" alt="FluCoMa Logo" /></a>
	
	{#if navExpand}
	<div class="links">
		<a class="nav-link" href="/learn">Learn</a>
		<a class="nav-link" href="/explore">Explore</a>
		<a class="nav-link" href="/reference">Reference</a>
	</div>
	<Search />
	{/if}
</header>

<svelte:window bind:innerWidth={w} />

<style lang="postcss">
	.container {
		display: grid;
		grid-template-areas:
		"logo-link links search"
		;
		justify-content: space-around;
		background: var(--dark-blue);
		padding: 1em;
		gap: 3em;
	}
	@media (max-width: 1200px) {
		.container {
			grid-template-areas: 
			"hamburger logo ."
			". links ."
			". search ."
			;
		}
	}
	.links {
		grid-area: links;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		gap: 1em;
	}
	@media (max-width: 1200px) {
	}

	.logo {
		width: 2em;
		height: 100%;
	}

	.logo-link {
		grid-area: logo-link;
		width: 2em;
		height: 100%;
	}

	.logo-link:hover {
		background: transparent;
	}

	.nav-link {
		font-family: var(--font);
		margin-top: auto;
		margin-bottom: auto;
		text-align: center;
		font-size: 1.5em;
		color: white;
		text-decoration: none;
	}

	.nav-link:hover {
		background: transparent;
		text-decoration: underline;
	}

	.nav-link:visited {
		color: white;
	}

	.nav-link:visited {
		color: white;
	}
</style>
