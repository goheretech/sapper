<script>
  import Nav from "../components/Nav.svelte";
  import Clouds from "./go/components/Clouds.svelte";
  import {onMount} from "svelte";

  onMount(()=>{
    
  })

</script>

<style>
  .glowy {
    font-size: 145px;
    position: relative;
    margin: 0;
    padding: 40px 0;
    background-image: linear-gradient(
      to right,
      #d624a6,
      #f7a140,
      green,
      #22d8d8,
      purple,
      #d624a6
    );
    background-clip: text;
    background-size: 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: colorScroll 20s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .glowy.white {
    -webkit-text-fill-color: white;
  }

  .astro {
    position: realtive;
    z-index: 23;
    animation: colorRotate 10s linear infinite;
  }

  .letsgo_hero {
    display: flex;
    height: 100vh;
  }

  .sectionBlack {
    width: 100vw;
    background: black;
    padding: 60px 0px;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .container {
    width: 1300px;
    text-align: center;
  }
</style>

<svelte:head>
  <title>Let's Go | goHere</title>
</svelte:head>

<Nav />
<section class="letsgo_hero">
  <img class="astro" src="img/astro.png" alt="" width="800px" />
  <h1 class="creative fixed">
    <span class="glowy" data-glow="Lets Make Magic">Lets Make Magic</span>
    <span class="glowy white">Yeah Baby!</span>
  </h1>

</section>
<section class="sectionBlack">
  <div class="divider-bottom colorChange" />
  <div class="divider-bottom black" />
  <div class="container gg">
    <div
      transition:fade={{ delay: 150, duration: 300 }}
      data-aos="fade-up"
      data-aos-offset="-400"
      class="cc">
      <div class="mini">
        <div class="icon colorChange" />
        <h6>Sucks Eggs</h6>
      </div>
      <h2>Your Mom</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        obcaecati ullam temporibus iste inventore itaque necessitatibus possimus
        perferendis cumque architecto aspernatur numquam dolore, quidem
        recusandae voluptatem? Voluptatibus voluptate vitae in dolore nam
        eligendi dicta perferendis? Minima iusto voluptate nihil, perferendis
        asperiores enim quas ipsa ullam inventore odit veniam aspernatur tenetur
        magni reiciendis deserunt assumenda! Quae laboriosam eveniet obcaecati
        maxime quaerat!
      </p>
    </div>
  </div>
</section>
