<script>
	import Tabs from '$lib/components/Tabs.svelte';
	import Max from '$lib/tabs/distribution/Max.svelte';
	import SC from '$lib/tabs/distribution/SC.svelte';
	
	const items = [
		{ label: 'Max', component: Max },
		{ label: 'SuperCollider', component: SC }
	]
</script>

<Tabs {items} />