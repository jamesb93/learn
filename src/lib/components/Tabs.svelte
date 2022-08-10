<script>
	export let items = [];
	export let activeTabValue = 1;

	items = items.map((x, i) => {
		x.value = i + 1;
		return x;
	});

	const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul>
	{#each items as item}
		<li class={activeTabValue === item.value ? 'active' : ''}>
			<span on:click={handleClick(item.value)}>{item.label}</span>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
		<div class="box">
			<svelte:component this={item.component} />
		</div>
	{/if}
{/each}

<style>
	.box {
		margin-bottom: 1em;
		padding: 1.25em;
		border: 1px solid var(--light-blue);
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25em;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		border-bottom: 1px solid var(--light-blue);
	}
	li {
		margin-bottom: -1px;
	}

	span {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	span:hover {
		border-color: var(--light-blue);
	}

	li.active > span {
		color: black;
		background-color: #fff;
		border-color: var(--light-blue);
		border-bottom-color: white;
	}
	:not(li.active) > span {
		color: #495057;
	}
</style>
