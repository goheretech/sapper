<script>
    let page = 0;
    import { fade } from 'svelte/transition';
    import Who from './pages/Who.svelte'
    import What from './pages/What.svelte'
    import Where from './pages/Where.svelte'
    import Work from './pages/Work.svelte'
    let planet = ['/img/Planets/planet1.png','/img/Planets/planet2.png','/img/Planets/planet3.png','/img/Planets/planet4.png']
    let titleColor = 'Brilliance'
    let title = ['Envisioneers','Creators','Inventors','Thinkers']
    let tag = ['Nerd Alert','Masterminds','Unstoppable','Powerful']
    let head = ['New Strategies. Old Values.','Sharpening The Cutting Edge','Creating Beauty Daily', 'Our Amazing Partners']
    let par = ['As members of the first generation to grow up in the age of the internet, the founders of goHere have a deep understanding of how tastes and technology have evolved coupled with an unmatched talent for predicting where they are headed.','At goHere we develop and apply technology in creative ways, adding value to your organization. Technology enables transformational opportunities for your business.','At goHere we develop and apply technology in creative ways, adding value to your organization. Technology enables transformational opportunities for your business.','We develop a creative partnership with each of our clients to deliver the best results. We select brands that we can add value to — brands we can be passionate about helping.']
    let button = 'Learn More'
    let buttonHref = '#what'

    function changePage(){
        console.log(page)
        page++
        if (page > 3){
            page =0;
        }
    }
    function goWho(){
        page = 0;
    }
    function goWhat(){
        page = 1;
    }
    function goWhere(){
        page = 2;
    }
    function goWork(){
        page = 3;
    }
</script>

<style>
    .changer{
        position:fixed;
        top:10;
        right:10;
        z-index:9999;

    }
</style>
    <header>
    <nav>
        <div style="position:relative">
            <a href="/" class='logo'>go<strong>Here</strong></a>
            <img src="/img/newLogo1.png" style="width:70px;position:absolute; top:-10px" alt="">
        </div>
        
        <ul class="nav-link">
            <li><a on:click="{goWho}" href="more"><span>who</span></a></li>
            <li> <a on:click="{goWhat}" href="more"><span>what</span></a></li>
            <li><a on:click="{goWhere}" href="more"><span>where</span></a></li>
            <li><a on:click="{goWork}" href="more"><span>work</span></a></li>
            <li><a on:click="{goWho}" href="more"><span>contact</span></a></li>
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

            <div class="HomeHero-Col">
                <img src="{planet[page]}" alt="" class="planet">
                <h1 class="creative fixed"><span class="colorChange bril">{titleColor}</span><br>
                    <span transition:fade class="lh">{title[page]}</span>
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
                <div class="icon colorChange"></div>
                <h6>{tag[page]}</h6>
            </div>
            <h2>{head[page]}</h2>
            <p>{par[page]}</p>
            <a href="{buttonHref}">{button}</a>
        </div>
    </section>
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