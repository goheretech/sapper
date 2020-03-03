<script>
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";
  import Loader from "../components/Loader.svelte";
  let loaded = true;
  onMount(() => {
    var width = 100,
      perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = parseInt((EstimatedTime / 1000) % 60) * 100;

    document.addEventListener("load", () => {
      loaded = false;
    });
  });
  // function animateValue(id, start, end, duration) {

  // 	var range = end - start,
  // 	current = start,
  // 	increment = end > start? 1 : -1,
  // 	stepTime = Math.abs(Math.floor(duration / range))

  // 	var timer = setInterval(function() {
  // 		console.log(current);

  // 		current += increment;
  // 	//obj.innerHTML = current;
  // 		if (current == end) {
  // 			clearInterval(timer);
  // 		}
  // 	}, stepTime);

  // 	log
  // }
</script>

<style>
  main {
    overflow-x: hidden;
    width: 100vw;
  }
  div {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<!-- <Nav/> -->

<main>
  <div class:loaded>
    <Loader />
  </div>

  <slot />
</main>
