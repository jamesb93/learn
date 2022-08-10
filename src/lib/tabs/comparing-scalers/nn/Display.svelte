<script>
	import Tabs from '$lib/components/Tabs.svelte';
	import Raw from './Raw.svelte';
	import Norm from './Norm.svelte';
	import Std from './Std.svelte';
	import IQR from './IQR.svelte';

	const items = [
		{
			label : 'Raw',
			component: Raw
		},
		{
			label: 'Normalise',
			component: Norm
		},
		{
			label: 'Standardise',
			component: Std
		},
		{
			label: 'RobustScale',
			component: IQR
		}
	]
</script>

<Tabs {items} />