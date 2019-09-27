<script>
    import { onMount } from 'svelte';

	onMount(() => {
		let logo = document.querySelector('#logo');
        let blur = document.querySelector('#logoBlur');
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
	});
    
</script>


<style>
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
            <li><a href="more#who"><span>who</span></a></li>
            <li> <a href="more#what"><span>what</span></a></li>
            <li><a href="more#where"><span>where</span></a></li>
            <li><a href="more#work"><span>work</span></a></li>
            <li><a href="contact"><span>contact</span></a></li>
        </ul>

        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</header>