<script>
    import { afterUpdate } from 'svelte';
    import TransWrapper from '../components/TransWrapper';

	afterUpdate(() => {
		// document.addEventListener('scroll', fadeHero);
        console.log('lol');
        
	});
</script>
<svelte:head>
	<title>Where</title>
</svelte:head>
<TransWrapper>
<div><section class="Hero what">
        <div class="cont">

            <div class="HomeHero-Col">
                <img src="/img/Planets/planet4.png" alt="" class="planet">
                <h1 class="creative fixed"><span class="colorChange bril">Brilliance</span><br>
                    <span class="lh">Engineeers</span>
                </h1>
            </div>
        </div>
        <canvas id="canvasSpace"></canvas>
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section>
    <section class="sec black gg">
        <div data-aos="fade-up" data-aos-offset="-400" class="cc">
            <div class="mini">
                <div class="icon ico-black"></div>
                <h6>Masterminds</h6>
            </div>
            <h2>Sharpening the <br>cutting edge</h2>
            <p>At goHere we develop and apply technology in creative ways, adding value to your organization. Technology
                enables transformational opportunities for your business.</p>
            <a href="what">Learn More</a>
        </div>
    </section>
    <section class="gg">
        <div class="divider-top colorChange"></div>
        <div class="divider-top black"></div>

        <div data-aos="fade-up" data-aos-offset="-300" class="cc">
            <div class="mini">
                <div class="icon"></div>
                <h6>street-smart strategists</h6>
            </div>
            <h2>Creative Solutions <br>are our business.</h2>
            <p>At goHere we develop and apply technology in creative ways, adding value to your organization. Technology
                enables transformational opportunities for your business.</p>

        </div>
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section></div>
</TransWrapper>