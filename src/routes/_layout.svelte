<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';
	import Loader from '../components/Loader.svelte';
	let loaded = false;
	onMount(()=>{
		window.addEventListener('load', ()=>{
				console.log('everything has loaded');
				loaded = true;
			})
	})
</script>

<style>
	main{
		overflow-x:hidden;
		width:100vw;
	}
</style>

<!-- <Nav/> -->

<main>
{#if !loaded}
	<Loader />
{/if}
	<slot></slot>
</main>