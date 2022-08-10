<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
</script>

<p>
	Using <code>find</code> and <code>xargs</code> limiting to one folder deep. Assumes you current working directory contains
	WAV or AIFF audio files.
</p>

<CodeBlock>
	<code>
		find . -name "*.wav" -print0 -maxdepth 2 | xargs -0 -I src fluid-hpss -source src -harmonic src-h.wav
		-percussive src-p.wav
	</code>
</CodeBlock>

<p>
	Using <a href="https://github.com/sharkdp/fd">fd</a> limiting to one folder deep. Assumes your current working directory
	contains WAV or AIFF audio files.
</p>

<CodeBlock>
	<code>
		mkdir -p output && fd -e wav -d 1 -x fluid-hpss -source {'{}'} -harmonic output/{'{/.}'}-h.wav -percussive
		output/{'{/.}'}-p.wav
	</code>
</CodeBlock>
