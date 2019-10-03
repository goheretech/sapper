<script>
    import Index from '../components/3d.js'
    import Nav from '../components/Nav.svelte';
    import TransWrapper from '../components/TransWrapper'
    import Loader from '../components/Loader.svelte';
    import {onMount, onDestroy} from 'svelte'
    let loaderShowing = true;
    onMount(()=>{
        
        
        var createScene = new Promise((resolve, reject)=>{
            let create3d = new Index();
            resolve(create3d);
        })
        createScene.then((value)=>{
            setTimeout(function() {
                loaderShowing = false;   
            }, 600);                     
            console.log('done')
        })
        
    })

    onDestroy(()=>{
        loaderShowing = true;    
    })
    
    

</script>

<style>
    .bigBoy{
        font-size:80px !important;
        padding:0 !important;
        margin-bottom:20px !important;
        font-weight:800 !important;
        text-transform: uppercase;
    }
</style>
<svelte:head>
	<title>goHere | Creative Solutions</title>
</svelte:head>
{#if loaderShowing}
	<Loader />
{/if}
<Nav />
    <!-- <TransWrapper> -->
<div class="bg">
        <canvas id="canvas"></canvas>
    </div>
    <!-- <div w3-include-html="./build/loader.html" id="loader"></div>
    <div w3-include-html="./build/header.html"></div> -->
    <section class="Hero home">
        <div class="cont" id="topSec" data-aos="fade">

            <div class="HomeHero-Col">
                <h1 class="creative"><span class="colorChange" data-glow="Creative">Creative</span><br>
                    <span class="lh">Solutions</span>
                </h1>
            </div>
        </div>
        
        <!-- <div class="divider-bottom purple"></div> -->
    </section>
    <section class="sec gg" id="canvDemo">
        <div data-aos="fade" data-aos-offset="-400" class="cc">
            <div class="mini">
                <div class="icon ico-purple"></div>
                
                <h6>Masterminds</h6>
            </div>
            
            <h2>What are Creative solutions?</h2>
            <p>The completely customized, technology-based strategies we use to help you solve problems, optimize growth, and reach your unique goals.</p>
            <a href="more#work">Let's Talk</a>
        </div>
    </section>
    <section class="gg " >
        
        <div data-aos="fade" data-aos-offset="-300" class="cc al-left" id="midSec">
            
            <h2>Creative Solutions <br>Are Our Business.</h2>
            <p>And with our stunning designs and tailored content, your brand image will reflect your business’s fundamental values.</p>

        </div>
        <!-- <div class="divider-top pink"></div>
        <div class="divider-bottom pink"></div> -->
    </section>
    <section class="sec gg" id="canvDemo2">
        <div data-aos="fade" data-aos-offset="-300" class="cc">
            <div class="mini">
                <div class="icon ico-purple"></div>
                <h6>INCITING INSPIRATION</h6>
            </div>
            <h2>Be Different</h2>
            <p>Our solutions spark powerful outcomes that open up a world of opportunities for your business and set you up for success. </p>
            <a href="more#who">Get Started</a>
        </div>
    </section>
    <section class="gg" >
        
        <div id="lastSec"  data-aos="fade" data-aos-offset="-300" class="cc">
            <div class="mini">
                <div class="icon ico-black"></div>
                <h6>be creative</h6>
            </div>
            <h2 >Join us at</h2><h2 class="bigBoy">the Cutting Edge</h2>            
            <a href="more#contact">Get Started</a>
        </div>
        <!-- <div class="divider-top purple"></div>
        <div class="divider-bottom purple"></div> -->
    </section>
    <!-- </TransWrapper> -->