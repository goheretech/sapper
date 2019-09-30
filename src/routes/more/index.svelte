<script>
    
    import {onMount} from 'svelte';
    import * as animateScroll from "svelte-scrollto";
    import { fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import {pages} from './components/Pages.js';
    import Who from './pages/Who.svelte'
    import What from './pages/What.svelte'
    import Where from './pages/Where.svelte'
    import Work from './pages/Work.svelte'

    let page = 0;
    let showing = false;
    onMount(()=>{
        let logo = document.getElementById('logo'); 
        let blur = document.getElementById('logoBlur');
        let rotation = 1;
        function rotate(){
            rotation++
            let newR = rotation/10
            let wave = Math.abs(Math.sin(newR/10));
            // console.log(wave)
            // console.log(logo.style.transform)
            logo.style.transform = `rotate(${newR}deg)`;
            blur.style.transform = `rotate(${newR}deg)`;
            blur.style.filter = `blur(${wave*5}px) hue-rotate(${newR*15}deg)`;
            blur.style.opacity = `${1-wave}`;
        }
        setInterval(rotate, 20)

     showing = true;
        switch(window.location.hash){
            case '#who':
                animateScroll.scrollToTop()
                page = 0;
                break;
            case '#what':
                animateScroll.scrollToTop()
                page = 1;
                break;
            case '#where':
                animateScroll.scrollToTop()
                page = 2;
                break;
            case '#work':
                animateScroll.scrollToTop()
                page = 3;
                break;
        }
    });

    function goWho(){
     showing = false;
        page = 0;
        
        setTimeout(()=>{
            animateScroll.scrollToTop()
            console.log('fade in')
         showing = true;
        }, 500)
    }
    function goWhat(){
     showing = false;
        page = 1;
        
        setTimeout(()=>{
            animateScroll.scrollToTop()
         showing = true;
        }, 500)
    }
    function goWhere(){
     showing = false;
        page = 2;
        
        setTimeout(()=>{
            animateScroll.scrollToTop()
         showing = true;
        }, 500)
    }
    function goWork(){
     showing = false;
        page = 3;
        
        setTimeout(()=>{
            animateScroll.scrollToTop()
         showing = true;
        }, 500)
    }
</script>
<style>
    .bottom{
        height:auto !important;
        min-height:800px;
    }
    .bottom .hold{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:100%;
    }
    .space{ width:100%;
        background:url(img/Planets/space.jpg);
        background-size: cover;
        background-attachment: fixed;
        z-index:10;}
    .divider-top{z-index:11;}
    .divider-bottom{z-index:11;}
    
    .logoHolder{
        position:absolute; 
        right:15px;
        top:-10px;
    }
    .logoHolder img{
        width:70px;
        position:absolute; 
        top:0px;
    }

    </style>
    <header>
    <nav>
        <div style="position:relative">
            <a href="/" class='logo'>go<strong>Here</strong></a>
            <div class="logoHolder" style="">
                <img src="/img/newLogo1.png" style=" z-index:2;" alt="" id="logo">
                <img src="/img/oldLogo.png" style="filter:blur(2px)" alt="" id="logoBlur">
            </div>
        </div>
        
        <ul class="nav-link">
            <li><a on:click="{goWho}" href="more#who"><span>who</span></a></li>
            <li> <a on:click="{goWhat}" href="more#what"><span>what</span></a></li>
            <li><a on:click="{goWhere}" href="more#where"><span>where</span></a></li>
            <li><a on:click="{goWork}" href="more#work"><span>work</span></a></li>
            <li><a on:click="{goWho}" href="more#contact"><span>contact</span></a></li>
        </ul>

        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</header>

    <div>
    <!-- <button class="changer" on:click="{changePage}">Next Page</button> -->
    <section class="Hero who">
        <div class="cont">

            {#if showing}
            <div transition:fade="{{delay: 150, duration: 300}}" class="HomeHero-Col">
                <img  src="{pages[page].planet}" alt="" class="planet">
                <h1  class="creative fixed"><span class="colorChange bril">{pages[page].titleColor}</span><br>
                    <span  class="lh">{pages[page].title}</span>
                </h1>
            </div>
            {/if}
        </div>
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section>
    <section class="sec black gg">
        {#if showing}
        <div transition:fade="{{delay: 150, duration: 300}}" data-aos="fade-up" data-aos-offset="-400" class="cc">
            <div class="mini">
                <div class="icon colorChange"></div>
                <h6>{pages[page].tag}</h6>
            </div>
            <h2>{pages[page].head}</h2>
            <p>{pages[page].par}</p>
            <a on:click="{goWhat}" href="{pages[page].buttonHref}">{pages[page].button}</a>
        </div>
        {/if}
    </section>
    <section class="gg bottom">
        <div class="divider-top colorChange"></div>
        <div class="divider-top black"></div>
        <div class="space">
            {#if showing}
                    <div class="hold" transition:fade="{{delay: 150, duration: 300}}">
                    {#if page == 0}
                        <Who/>
                    {/if}
                    {#if page == 1}
                        <What/>
                    {/if}
                    {#if page == 2}
                        <Where/>
                    {/if}
                    {#if page == 3}
                        <Work/>
                    {/if}
                </div>
            {/if}
        </div>
        
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section>
</div>