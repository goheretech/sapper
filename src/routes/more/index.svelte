<script>
  import { onMount, onDestroy } from "svelte";
  import * as animateScroll from "svelte-scrollto";
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { pages } from "./components/Pages.js";
  import CTA from "./components/CTA.svelte";
  import Who from "./pages/Who.svelte";
  import What from "./pages/What.svelte";
  import Where from "./pages/Where.svelte";
  import Work from "./pages/Work.svelte";
  import App from "./pages/App.svelte";
  import Contact from "./pages/Contact.svelte";
  import Clouds from './components/Clouds.svelte'
  import SelectService from './components/SelectService.svelte'

  let frmShow = false;
  let displayMenu = false;
  let hash;
  export let page = 0;
  let pageName = "Who";
  let showing = false;
  function toggleFrm() {
    frmShow = !frmShow;
  }
  onMount(() => {
    hash = window.location.hash;
    let logo = document.getElementById("logo");
    let blur = document.getElementById("logoBlur");
    let rotation = 1;
    function rotate() {
      rotation++;
      let newR = rotation / 10;
      let wave = Math.abs(Math.sin(newR / 10));
      // console.log(wave)
      // console.log(logo.style.transform)
      logo.style.transform = `rotate(${newR}deg)`;
      blur.style.transform = `rotate(${newR}deg)`;
      blur.style.filter = `blur(${wave * 5}px) hue-rotate(${newR * 15}deg)`;
      blur.style.opacity = `${1 - wave}`;
    }
    onDestroy(()=>{
        document.getElementById('nebula').remove(); 
    })
    setInterval(rotate, 20);

    showing = true;
    switch (window.location.hash) {
      case "#who":
        animateScroll.scrollToTop();

        page = 0;
        break;
      case "#what":
        animateScroll.scrollToTop();
        pageName = "What";

        page = 1;
        break;
      case "#where":
        animateScroll.scrollToTop();
        pageName = "Where";

        page = 2;
        break;
      case "#work":
        animateScroll.scrollToTop();
        pageName = "Work";

        page = 3;
        break;
      case "#contact":
        animateScroll.scrollToTop();
        pageName = "Contact";

        page = 4;
        break;
    }
  });

  function goWho() {
    hash = window.location.hash;
    showing = false;
    page = 0;
    pageName = "Who";
    setTimeout(() => {
      animateScroll.scrollToTop();
      console.log("fade in");
      showing = true;
      frmShow = false;
      console.log(frmShow);
    }, 500);
  }
  function goWhat() {
    hash = window.location.hash;
    showing = false;
    page = 1;
    pageName = "What";
    frmShow = false;
    setTimeout(() => {
      animateScroll.scrollToTop();
      showing = true;
      console.log(frmShow);
    }, 500);
  }
  function goWhere() {
    hash = window.location.hash;
    showing = false;
    page = 2;
    pageName = "Where";
    frmShow = false;
    console.log(frmShow);
    setTimeout(() => {
      animateScroll.scrollToTop();
      showing = true;
    }, 500);
  }
  function goWork() {
    hash = window.location.hash;
    showing = false;
    frmShow = false;
    console.log(frmShow);
    page = 3;
    pageName = "Work";
    setTimeout(() => {
      animateScroll.scrollToTop();
      showing = true;
    }, 500);
  }
  function goContact() {
    hash = window.location.hash;
    showing = false;
    frmShow = false;
    console.log(frmShow);
    page = 4;
    pageName = "Contact";
    setTimeout(() => {
      animateScroll.scrollToTop();
      showing = true;
    }, 500);
  }

  function toggleMenu(){
    displayMenu = !displayMenu;
    console.log(displayMenu);
    
  }
</script>

<style>
  .bottom {
    height: auto !important;
    min-height: 800px;
    background:black;
  }
  .bottom .hold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .space {
    width: 100%;
    background: url(img/Planets/space.jpg);
    background-size: cover;
    background-attachment: fixed;
    z-index: 10;
  }
  .divider-top {
    z-index: 11;
  }
  .divider-bottom {
    z-index: 11;
  }

  .logoHolder {
    position: absolute;
    right: 15px;
    top: -10px;
  }
  .logoHolder img {
    width: 70px;
    position: absolute;
    top: 0px;
  }

  .CTA {
    z-index: 10;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .blackback {
    z-index: 9;
    background: black;
    position: relative;
  }
  .ctah2 {
    font-size: 150px;
    /* padding-bottom:20px; */
  }
  .ctah3 {
    padding-bottom: 20px;
  }
  .ctaa {
    margin: 0px 10px;
    cursor: pointer;
  }

  #nebula{
    width:100vw;
    height:300px;
    position:fixed;
    top:0;
    left:0;
    z-index:1;
  }
  @media screen and (max-width:500px) {
           
           .space{
             height:100%;
           }
           .hold{
             height:auto;
             padding: 80px 0px;
           }
            .bottom{
                     min-height:auto;
                   }
                   #nebula{
                     position:absolute;
                   }
           
    }
        
        
                  
</style>

<svelte:head>
  <title>{pageName} | goHere</title>
</svelte:head>
<header>
  <nav>
    <div style="position:relative">
      <a rel=prefetch href="/" class="logo">
        go<strong>Here</strong>
      </a>
      <div class="logoHolder" style="">
        <img src="/img/newLogo1.png" style=" z-index:2;" alt="" id="logo" />
        <img
          src="/img/oldLogo.png"
          style="filter:blur(2px)"
          alt=""
          id="logoBlur" />
      </div>
    </div>

    <ul class="nav-link" class:nav-active={displayMenu}>
      <li class:active="{page === 0}" class:act="{displayMenu}">
        <a rel=prefetch on:click={()=>{goWho();toggleMenu()}} href="more#who">
          <span>who</span>
        </a>
      </li>
      <li class:active="{page === 1}" class:act="{displayMenu}">
        <a rel=prefetch on:click={()=>{goWhat();toggleMenu()}} href="more#what">
          <span>what</span>
        </a>
      <!-- </li>
      <li class:active="{page === 2}" class:act="{displayMenu}"> 
        <a rel=prefetch on:click={()=>{goWhere();toggleMenu()}} href="more#where">
          <span>where</span>
        </a>
      </li> -->
      <li class:active="{page === 3}" class:act="{displayMenu}">
        <a rel=prefetch on:click={()=>{goWork();toggleMenu()}} href="more#work">
          <span>work</span>
        </a>
      </li>
      <li class:active="{page === 4}" class:act="{displayMenu}">
        <a rel=prefetch on:click={()=>{goContact();toggleMenu()}} href="more#contact">
          <span>contact</span>
        </a>
      </li>
    </ul>

    <div class="burger" class:toggle='{displayMenu}' on:click='{toggleMenu}'>
      <div class="line1" />
      <div class="line2" />
      <div class="line3" />
    </div>
  </nav>
</header>

<div>
  <!-- <button class="changer" on:click="{changePage}">Next Page</button> -->
  <section class="Hero who">
    <div class="cont">
      {#if page == 1 || page == 4 }
        <canvas id="nebula" ></canvas>
      {/if}
      {#if showing}
        <div
          transition:fade={{ delay: 150, duration: 300 }}
          class="HomeHero-Col">
            {#if page<4}
              <img src={pages[page].planet} alt="" class="planet" />
            {:else}
              <img  alt="" class="planet" />
            {/if}
            
         
          <h1 class="creative fixed">
            <span class="colorChange bril" data-glow='{pages[page].titleColor}'>{pages[page].titleColor}</span>
            <br />
            <span class="lh">{pages[page].title}</span>
          </h1>
        </div>
      {/if}
    </div>
    <div class="divider-bottom colorChange" />
    <div class="divider-bottom black" />
  </section>
  <section class="sec black gg">
    {#if showing}
      <div
        transition:fade={{ delay: 150, duration: 300 }}
        data-aos="fade-up"
        data-aos-offset="-400"
        class="cc">
        <div class="mini">
          <div class="icon colorChange" />
          <h6>{pages[page].tag}</h6>
        </div>
        <h2>{pages[page].head}</h2>
        <p>{pages[page].par}</p>
        <!-- <a rel=prefetch on:click={goWhat} href={pages[page].buttonHref}>
          {pages[page].button}
        </a> -->
      </div>
    {/if}
  </section>
 
  <section class="gg bottom">
   
    <div class="divider-top colorChange" />
    <div class="divider-top black" />
    <div class="space">
    
      {#if showing}
        <div class="hold" transition:fade={{ delay: 150, duration: 300 }}>
          {#if page == 0}
            <Who />
          {/if}
          {#if page == 1}
            <SelectService /><Clouds />
          {/if}
          {#if page == 2}
            <Where />
          {/if}
          {#if page == 3}
            <Work />
          {/if}
          {#if page == 4}
            <CTA /><Clouds />
          {/if}
          {#if page == 5}
            <App />
          {/if}
        </div>
      {/if}
    </div>

    <div class="divider-bottom colorChange" />
    <div class="divider-bottom black" />
  </section>
</div>
{#if page < 4}
  <div class="blackback">
        
    {#if !frmShow}
      <section class="CTA gg" transition:fade={{ delay: 150, duration: 300 }}>
        <div class="cc">
        
          <div class="mini">
            <div class="icon ico-purple" />
            <h6>be creative</h6>
          </div>
          <h2 class="ctah2">
            Let's Create
            <br />
            Something Beautiful
          </h2>
          <h3 class="ctah3">Reach out today and find out what goHere can do for you.</h3>
          <div class="buttonHold">
            <a class="ctaa" on:click={toggleFrm}>Let's Go</a>
            <a rel=prefetch class="ctaa" on:click={goContact} href="more#contact">
              Contact Us
            </a>
          </div>
        </div> 
      </section>
    {:else}
    <div transition:fade={{ delay: 150, duration: 300 }}><CTA /></div>
      
    {/if}

  </div>
{/if}
