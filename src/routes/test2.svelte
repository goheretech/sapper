<script>
    import Index from '../components/space.js'
    import {onMount} from 'svelte';
    let topSec, midSec, bottomSec;
    onMount(()=>{
        let create3d = new Index();
        window.addEventListener('scroll', fadeScroll);
        topSec = document.getElementById('topSec');
        midSec = document.getElementById('midSec');
        bottomSec = document.getElementById('lastSec');
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
        
        if (y > 1) {
            topSec.style.opacity = 0;
        } else {
            topSec.style.opacity = 1;
        }

        if (y > 44 && y < 56) {
            midSec.style.opacity = 1;
        } else {
            midSec.style.opacity = 0;
        }

        if (y > 99) {
            bottomSec.style.opacity = 1;
        } else {
            bottomSec.style.opacity = 0;
        }
        
    }
    function lerp(min, max, value){
        return (max - min) * value + min;
    }
</script>
<style>
    #hh{
        height:5300px;
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
        
        font-size:140px;
        padding:80px;
        text-align:right;
        font-weight:bold;
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
</style>
<svelte:head>
	<title>goHere | Creative Solutions</title>
</svelte:head>
<div id="hh">
    <canvas id="canvas"></canvas>
</div>
<div class="overlay">
    <div class="crt" id="topSec">
        <div class="colored" data-glow="Big">Big</div>
        Boobies
    </div>    
    <section class="gg">
        <div class="cc al-left" id="midSec">
            <h2>Creative Solutions <br>Are Our Business.</h2>
            <p>Our handiwork sparks powerful outcomes that will open up a world of opportunities for your business. Plus, our stunning designs and tailored content will give your brand the look and feel of excellence.</p>
        </div>
    </section>
    <section class="gg">
        <div id="lastSec" class="cc">
            <div class="mini">
                <div class="icon ico-purple"></div>
                <h6>be creative</h6>
            </div>
            <h2>Join us at</h2><h2 class="bigBoy">the Cutting Edge</h2>            
            <a href="more#contact">Get Started</a>
        </div>
    </section>
</div>