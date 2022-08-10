<script>
	import IndentNote from '$lib/components/IndentNote.svelte';
</script>

<p>
	<a href="/examples/batch/batch-slicing-threads.pd" download
		>Download Non-blocking Segment Analysis PureData Patch
	</a>
</p>
<p>
	<a href="/examples/batch/batch-decomposition-threads.pd" download
		>Download Non-blocking Decomposition PureData Patch</a
	>
</p>

<IndentNote type="danger">
	<p>
		The non-blocking decomposition patch requires PureData version 0.52-1 or greater because it uses the <code
			>file</code
		> object.
	</p>
</IndentNote>
