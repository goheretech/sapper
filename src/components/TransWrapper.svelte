<script>
    import {onMount} from 'svelte';
	import { fade, fly } from 'svelte/transition';
    let visible = false;
    
    onMount(()=>{
        visible = true;
    })
</script>
<style>
    div{position:relative;opacity:0%;}
</style>
{#if visible}
    <div transition:fade >
        <slot><!-- optional fallback --></slot>
    </div>
{/if}