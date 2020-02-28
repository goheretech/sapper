<script>
  import { onMount } from "svelte";

  onMount(() => {
    const circles = getElementsByClassName("circle");
    circles.forEach((circle, i) => {
      circle.style.transform = "transformX(" + i + "px)";
    });
  });
</script>

<style>
  * {
    outline: blue solid 1px;
  }
  section {
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contain {
    width: 300px;
    height: 300px;
    position: relative;
  }
  .circle {
    border: green solid 1px;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
  }
</style>

<section>
  <div class="contain">
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
  </div>
</section>
