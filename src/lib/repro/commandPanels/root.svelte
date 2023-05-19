<!-- 
    This is the root command panel. It precedes all other command panels.
 -->
<script lang="ts">
    import { commands } from '../commandCenter';
    import Template from './template.svelte';
</script>

<Template options={$commands} />
