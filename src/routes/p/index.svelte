<script context="module">
	
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
import TransWrapper from '../../components/TransWrapper';
	export let posts;
</script>


<TransWrapper>
    <section class="Hero work">
        <div class="cont">

            <div class="HomeHero-Col" style="width:100%">
                <img src="/img/Planets/planet6.png" alt="" class="planet" >
                <h1 class="creative fixed"><span class="colorChange">Creative</span><br>
                    <span class="lh">Partners</span>
                </h1>
            </div>
        </div>
        <!-- <canvas id="canvasSpace"></canvas> -->
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </section>
    <section class="sec black gg">
        <div data-aos="fade-up" data-aos-offset="-400" class="cc">
            <div class="mini">
                <div class="icon colorChange"></div>
                <h6>Aiding Awesomeness</h6>
            </div>
            <h2>Our Amazing Partners</h2>
            <p>We develop a creative partnership with each of our clients to deliver the best results. We select brands that we can add value to — <b>brands we can be passionate about helping.</b></p>
        </div>
    </section>
    <div class="altSection">
        <div class="divider-top colorChange"></div>
        <div class="divider-top black"></div>
        <!-- <canvas class="sec black" id="canvasHex"></canvas> -->
        <div data-aos="fade-up" data-aos-offset="-300"  id="partnersHolder">
            


        </div>
        <div class="divider-bottom colorChange"></div>
        <div class="divider-bottom black"></div>
    </div>
	</TransWrapper>