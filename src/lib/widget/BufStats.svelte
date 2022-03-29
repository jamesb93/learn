<script>
    import { indexOfSmallest, pairwise } from '$lib/util'
	import * as math from 'mathjs'
	import * as d3 from 'd3';

	let rect;
	let nearestBar = 0;
    let NUMSLIDERS = 100;
	let heights = [...Array(NUMSLIDERS).fill(200)];
	let binner = d3.bin().thresholds(10).domain([0, 200])
	$: distribution = binner(heights)
	let width = 100;
	let stats = {
		'mean': 0,
		'standard deviation': 0,
		'skewness': 0,
		'kurtosis': 0,
		'low': 0,
		'middle': 0,
		'high': 0
	}

	function getStats(vec) {
		const mean = math.mean(vec);
		const std = math.std(vec);
		const skewness = math.mean(math.cube(vec.map(x =>(x - mean) / (std === 0 ? 1 : std))));
		const kurtosis = math.mean(vec.map(x => math.pow(4, (x - mean) / (std === 0 ? 1 : std))));
		const low = math.min(vec);
		const middle = math.median(vec);
		const high = math.max(vec);
		return stats = {
			'mean': mean,
			'standard deviation': std,
			'skewness': skewness,
			'kurtosis': kurtosis,
			'low': low,
			'middle': middle,
			'high': high
		}
	}

	$: stats = getStats(heights.map(x => 1 - (x / 200.0))) // normalize
	let derivatives = new Array(heights.length).fill(100);
	$: {
		pairwise(heights, (a, b, i) => {
			derivatives[i] = b - a;
		})
	}

	let mousedownState = false;
	function mousedown() { mousedownState = true }
	function mouseup() { mousedownState = false }
	function mousemove(e) {
		if (mousedownState) {
			const ticks = [...Array(NUMSLIDERS).fill(0.0)].map((x, i) => (width / NUMSLIDERS) * i);
			const distances = ticks.map(x => Math.abs(x - e.offsetX));
			const nearest = indexOfSmallest(distances);
			heights[nearest] = 200 - e.offsetY
			nearestBar = nearest;
		}
	}
</script>

<!-- {#each Object.entries(stats) as [k, v] } -->
	<!-- {k}{v} -->
<!-- {/each} -->
{ stats.skewness }
<svelte:window on:mouseup={mouseup} />
<div class="container" bind:offsetWidth={width}>
	<svg class='sketch' on:mousedown={mousedown} on:mousemove={mousemove}>
		{#each heights as _, i}
		<rect x={(width / NUMSLIDERS * i)} width={2} height={heights[i]} y={200 - heights[i]} class:nearest={nearestBar === i}/>
		{/each}
	</svg>
</div>

<div class="container" bind:offsetWidth={width}>
	<svg class='sketch' on:mousedown={mousedown} on:mousemove={mousemove}>
		{#each derivatives as _, i}
		<rect x={(width / NUMSLIDERS * i)} width={2} height={derivatives[i]} y={200 - derivatives[i]} class:nearest={nearestBar === i}/>
		{/each}
	</svg>
</div>

<br>
{ distribution.length }
<div class="container">
	<svg class='sketch'>
		{#each distribution as h, i}
		<rect 
		width={(width / distribution.length)* 0.5} 
		height={(distribution[i].length / distribution.length) * 200} 
		x={(width / distribution.length * i)}
		y={200 - ((distribution[i].length / distribution.length) * 200)} class:nearest={nearestBar === i}/>
		{/each}
	</svg>
</div>

<button on:click={() => heights = heights.map((x, i) => i)}>ramp</button>
<button on:click={() => heights = heights.map((x, i) => 100)}>flat</button>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.sketch {
		width: 100%;
        height: 200px
	}
	.nearest {
		fill: red
	}
</style>
