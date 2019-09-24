<script>
	import { afterUpdate } from 'svelte';
	import TransWrapper from '../components/TransWrapper';
	import {fadeIn, fadeOut} from '../components/pageFade';
	import { fade } from 'svelte/transition';
	let visible = true;
	afterUpdate(() => {
		// document.addEventListener('scroll', fadeHero);
        console.log('lol');
        
	});
</script>
<style>
	
	
</style>


<svelte:head>
	<title>What</title>
</svelte:head>


<TransWrapper>
<section transition:fade="{{transition:20000}}"  class="Hero what">
        <div class="cont">

            <div class="HomeHero-Col">
                <img transition:fade="{{transition:2000}}" src="/img/Planets/planet2.png" alt="" class="planet">
                <h1 class="creative fixed"><span class="colorChange bril">Brilliance</span><br><span class="lh">Engineeers</span>
                </h1>
            </div>
        </div>
        <canvas id="canvasSpace"></canvas>
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section>
    <section transition:fade class="sec black gg">
        <div data-aos="fade-up" data-aos-offset="-400" class="cc">
            <div class="mini">
                <div class="icon colorChange"></div>
                <h6>Masterminds</h6>
            </div>
            <h2>Sharpening the <br>cutting edge</h2>
            <p>At goHere we develop and apply technology in creative ways, adding value to your organization. Technology
                enables transformational opportunities for your business.</p>
            <a href="work">Learn More</a>
        </div>
    </section>
    <section class="gg">
        <div class="divider-top colorChange"></div>
        <div class="divider-top black"></div>
        
        <div data-aos="fade-up" data-aos-offset="-300" class="cc">
            <div class="mini">
                <div class="icon colorChange"></div>
                <h6>street-smart strategists</h6>
            </div>
            <h2>Creative Solutions <br>are our business.</h2>
            <p>At goHere we develop and apply technology in creative ways, adding value to your organization. Technology
                enables transformational opportunities for your business.</p>

        </div>
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section>
		
</TransWrapper>