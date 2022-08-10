<script>
	import Image from '$lib/components/Image.svelte';
</script>

<Image
src="/learn/comparing-scalers/13_robust.png"
label="Robust-Scaled data will have the median (50th percentile) centred on 0 (solid line) with values on either side negative and positive. The dotted lines show the 25th and 75th percentile in each dimension. Notice that there is a range of 1 between the 25th and 75th percentiles but it may be asymmetrical around the median, and different in each dimension. The axes here range from -3 to 3 for comparison with Standardize."
/>