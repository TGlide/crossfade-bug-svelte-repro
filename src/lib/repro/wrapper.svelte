<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import {
        addSubPanel,
        clearSubPanels,
        commandCenterKeyDownHandler,
        disableCommands,
        popSubPanel,
        registerCommands,
        subPanels
    } from './commandCenter';
    import Root from './commandPanels/root.svelte';
    import { last } from '$lib/helpers/array';

    $: $registerCommands([
        {
            callback: () => {
                if ($subPanels.length > 0) {
                    clearSubPanels();
                } else {
                    addSubPanel({
                        name: 'commandPanel',
                        component: Root
                    });
                }
            },
            keys: ['k'],
            ctrl: true,
            forceEnable: true
        }
    ]);

    $: openSubPanel = last($subPanels) ?? null;

    $: $disableCommands(!!openSubPanel);

    afterNavigate(() => {
        clearSubPanels();
    });
</script>

<svelte:window on:keydown={$commandCenterKeyDownHandler} />

<button
    on:click={() => {
        addSubPanel({
            name: 'commandPanel',
            component: Root
        });
    }}>
    Add subPanel
</button>
<br />
<button
    on:click={() => {
        popSubPanel();
    }}>
    Pop subPanel
</button>

<p>Number of subPanels: {$subPanels.length}</p>
<p>External open: {!!openSubPanel}</p>

{#if openSubPanel}
    Internal open: {!!openSubPanel}
    <br />
    <Root />
{/if}
