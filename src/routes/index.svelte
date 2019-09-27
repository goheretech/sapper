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
<svelte:head>
	<title>Home</title>
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
                <h1 class="creative"><span class="colorChange">Creative</span><br>
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
            <h2>Do you want to engage customers and attract business?</h2>
            <p>goHere is sharpening the cutting edge with state-of-the art technology, advanced
                designs, and tailored user experiences that will attract customers to your business.</p>
            <a href="more#who">Get Started</a>
        </div>
    </section>
    <section class="gg " >
        
        <div data-aos="fade" data-aos-offset="-300" class="cc al-left" id="midSec">
            
            <h2>Creative Solutions <br>are our business.</h2>
            <p>At goHere we develop and apply technology in creative ways, adding value to your organization. Technology
                enables transformational opportunities for your business.</p>

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
            <h2>Is your business using technology to its full potential?</h2>
            <p>We develop and implement brand new technology in creative ways aimed at adding value and enabling transformational opportunities for your business.</p>
            <a href="more#work">Let's Talk</a>
        </div>
    </section>
    <section class="gg" >
        
        <div id="lastSec"  data-aos="fade" data-aos-offset="-300" class="cc">
            <div class="mini">
                <div class="icon ico-black"></div>
                <h6>INCITING INSPIRATION</h6>
            </div>
            <h2>Does your brand image <br>stand out in the marketplace?</h2>
            <p>Our team of graphic designers, content creators, and marketing experts will build a powerful and engaging brand image for your business. You will fall back in love with your branding, and your customers with be captivated by our unique interactive designs and 3D modeling.</p>
            <a href="contact.html">Learn More</a>
        </div>
        <!-- <div class="divider-top purple"></div>
        <div class="divider-bottom purple"></div> -->
    </section>
    <!-- </TransWrapper> -->