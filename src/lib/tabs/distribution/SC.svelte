<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
</script>

<CodeBlock>

<code>
~distributions = &lbrace
	arg dataset, numBins = 100;
	dataset.dump(&lbrace
		arg dict;
		var data = dict["data"].values.flop;
		var histograms = data.collect&lbracearg dim; dim.histo(numBins)&rbrace;
		fork(&lbrace
			var win = Window("Distributions",Rect(0,0,800,820));
			var plotter = Plotter("Distributions",Rect(0,20,win.bounds.width,win.bounds.height-20),win);
			EZSlider(win,Rect(0,0,win.bounds.width,20),"Dimension:",ControlSpec(0,histograms.size-1,step:1),&lbrace
				arg sl;
				plotter.value_(histograms[sl.value.asInteger]);
			&rbrace,0,true,80);
			win.front;
		&rbrace,AppClock);
	&rbrace);
&rbrace;
</code>

</CodeBlock>