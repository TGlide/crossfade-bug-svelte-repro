<!-- 
    This is the template for all panels used in the command center.
    Use this component when you want to create a new panel.
 -->
<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	type BaseOption = { callback: () => void };
	type Option = $$Generic<BaseOption>;
	export let options: Option[] | null = null;

	let selected = 0;

	const [send, receive] = crossfade({
		duration: 150,
		easing: quadOut
	});
</script>

{#if options}
	<ul>
		{#each options as option, i}
			{#if selected === i}
				<div in:send={{ key: 'bg' }} out:receive={{ key: 'bg' }} />
			{/if}

			<slot name="option" {option} />
		{/each}
	</ul>
{:else}
	<slot />
{/if}
