<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';
	import Loader from '../components/Loader.svelte';
	let loaded = false;
	onMount(()=>{
		
		var width = 100,
		perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
		time = parseInt((EstimatedTime/1000)%60)*100;

		
		document.addEventListener('load', ()=>{
				loaded = true;
			})
	})
	function animateValue(id, start, end, duration) {
	
		var range = end - start,
		current = start,
		increment = end > start? 1 : -1,
		stepTime = Math.abs(Math.floor(duration / range))
		
		var timer = setInterval(function() {
			console.log(current);
			
			current += increment;
		//obj.innerHTML = current;
			if (current == end) {
				clearInterval(timer);
			}
		}, stepTime);

		log
	}
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
{:else}
	<slot></slot>	
{/if}
	
</main>