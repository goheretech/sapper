<script>
    import Index from '../components/space.js';
    import { fade } from "svelte/transition";
    import Loader from '../components/Loader.svelte';
    import Section from '../components/Section.svelte'    
    import Nav from '../components/Nav.svelte';
    import {onMount} from 'svelte';    
    let phase = 1;
    let loaded = false;
    let topSec, midSec, bottomSec;
    onMount(()=>{
        let old = document.getElementById('nebula');
        if (old) old.remove(); 
        var createScene = new Promise((resolve, reject)=>{
            let create3d = new Index();
            resolve(create3d);
        })
        window.addEventListener('scroll', fadeScroll);
        topSec = document.getElementById('topSec');
        midSec = document.getElementById('midSec');
        bottomSec = document.getElementById('lastSec');
        createScene.then((value)=>{
            setTimeout(function() {
                loaded = true;   
            }, 600);                     
            console.log('done')
        })
    })

    function fadeScroll(){
        //Get percent scrolled
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        var y =
            ((h[st] || b[st]) /
                ((h[sh] || b[sh]) - h.clientHeight)) *
            100; //0 to 100
        
        if (y < 3) {
            phase = 1;
        } else if (y > 48 && y < 67) {
            phase = 2;
        } else if (y > 99) {
            phase = 3;
        } else{
            phase = 0;
        }
        
    }
    function lerp(min, max, value){
        return (max - min) * value + min;
    }
    const sect = [
        {
            tag: 'Masterminds',
            head: 'What are Creative solutions?',
            par: 'The completely customized, technology-based strategies we use to help you solve problems, optimize growth, and reach your unique goals.',
            button: "Let's Talk",
            link: 'more#contact',
        },
        {
            tag: 'INCITING INSPIRATION',
            head: 'Be Exceptional',
            par: 'At goHere, we have built a community where uninhibited creativity can flourish, a spirit of excellence is embraced, and adding value is a way of life. Helping you dream big is what we love to do.',
            button: 'Learn More',
            link: 'more#who',
        }
    ]
</script>
<style>
    .spacer{
        height:1000px;
    }
    .spacer.top{
        height:1800px;
    }
    .spacer.mid{
        height:1800px;
    }
    .overlay{
        position:fixed;
        top:0;
        z-index:2;
        width:100%;
        height:100%;
        color:white;
        display:flex;
        justify-content: flex-end;
        align-items:flex-end;
    }
    .overlay .crt{
        
        font-size:160px;
        padding:80px;
        text-align:right;
        font-weight:bold;
        line-height:80%;
    }
    .colored{
        background-image: linear-gradient(to right, #d624a6, #f7a140, green, #22d8d8, purple, #d624a6);
        background-size: 600%;
        z-index: 1;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: colorScroll 20s linear infinite;
        line-height: 112%;
        position: relative;
    }
    .colored::after{
        content: attr(data-glow);
        position: absolute;
        top: 10;
        right: 0;
        filter: blur(10px);
        line-height: 112%;
        z-index: 5;
        background-image: linear-gradient(to right, #d624a6, #f7a140, green, #22d8d8, purple, #d624a6);
        background-size: 600%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: colorScroll 20s linear infinite;
    }
    canvas{
        position:fixed;
        z-index:1;
        top:0;
    }
    .bigBoy{
        font-size:80px !important;
        padding:0 !important;
        margin-bottom:20px !important;
        font-weight:800 !important;
        text-transform: uppercase;
    }
    @media screen and (max-width:500px) {
        .overlay .crt{
            padding:20px;
            font-size:90px;
        }
    }
</style>
<svelte:head>
	<title>goHere | Creative Solutions</title>
</svelte:head>
{#if !loaded}
    <Loader />
{/if}
<Nav />
<div class="spacer top">
    <canvas id="canvas"></canvas>
</div>
<Section {...sect[0]}/>
<div class="spacer mid" />
<Section {...sect[1]}/>
<div class="spacer" />

<div class="overlay">
    {#if phase == 1}
        <div class="crt" style="" id="topSec" transition:fade={{ duration: 300 }}>
            <div class="colored" data-glow="Creative">Creative</div>
            Solutions
        </div>   
    {/if} 
    {#if phase == 2}
    <section class="gg" transition:fade={{ duration: 300 }}>
        <div class="cc al-left" id="midSec" style="opacity:1;">
            <h2>Creative Solutions <br>Are Our Business.</h2>
            <p>Our handiwork sparks powerful outcomes that will open up a world of opportunities for your business. Plus, our stunning designs and tailored content will give your brand the look and feel of excellence.</p>
        </div>
    </section>
    {/if} 
    {#if phase == 3}
    <section class="gg" transition:fade={{ duration: 300 }}>
        <div id="lastSec" class="cc" style="opacity:1;" >
            <div class="mini">
                <div class="icon ico-purple"></div>
                <h6>be creative</h6>
            </div>
            <h2>Join us at</h2><h2 class="bigBoy">the Cutting Edge</h2>            
            <a href="more#contact">Get Started</a>
        </div>
    </section>
    {/if} 
    
</div>