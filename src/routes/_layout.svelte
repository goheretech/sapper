<script>
	import Nav from '../components/Nav.svelte';
	import Twinkle from '../components/Twinkle.svelte'
	import { onMount } from 'svelte';
	


</script>

<style>
	main{
		overflow-x:hidden;
		width:100vw;
	}
</style>

<!-- <Nav/> -->

<main>
	<Twinkle />
	<slot></slot>
</main>