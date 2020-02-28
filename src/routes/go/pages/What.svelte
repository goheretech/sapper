<script>
    let hidden = [true,true,true]
    import { fade, slide, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import {services} from '../components/Services'
    let turnedOn = false;

    import {onMount} from 'svelte';

    onMount(()=>{
        turnedOn = true;
    });


    console.log(services)
    function openUp(x){
        let parent = x.target.dataset.index;
        hidden[parent] = false;
        console.log('index:', parent,"; hidden:", hidden);
        
    }
    function closeUp (x){
        let parent = x.target.dataset.index;
        hidden[parent] = true;
        console.log('index:', parent,"; hidden:", hidden);
    }

</script>

<style>
    .services{
        display:flex;
        padding: 250px 0px;
    }
    .service{
        display:flex;
        align-items:center;
        justify-content:center;
        height:200px;
    }
    .serv{padding: 0 60px; min-width:400px}
    .clicker{width:100%; height:100%; position:absolute; top:0;left:0; bottom:0; right:0; z-index:40;}
    .serv h2::before {
        color: white;
        content: attr(data-before);
        position: absolute;
        top: 25px;
        z-index: -1;    
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to right, green, #22d8d8, purple, #d624a6, #f7a140, green);
        background-size: 600%;
        height:140px;
        animation: colorScroll 20s linear infinite;
        filter:blur(10px)
    }
    .info{width:100% !important; font-size:50px; margin:0;padding:0 0 10px 0;position:relative}
    .info::before {
        color: white;
        content: attr(data-before);
        position: absolute;
        top: 0;
        z-index: -1;    
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to right, green, #22d8d8, purple, #d624a6, #f7a140, green);
        background-size: 600%;
        animation: colorScroll 20s linear infinite;
        filter:blur(8px)
    }

    .serv h2{font-size:120px;position:relative;z-index:20;color:white;}
    @keyframes colorScroll {
    0% {
        background-position: 600%;
    }

    100% {
        background-position: 0%;
    }

    
}
@media screen and (max-width:500px) {
        .services{
            flex-direction:column;
            padding: 50px 0px;
        }
        .hidden{padding-top: 40px; }
    }

</style>
{#if turnedOn}
<div data-aos="fade-up" data-aos-offset="-300" class="cc">
    
    <div class="services">
        {#each services as service, index}
            
            <div class="{index} service"  style="position:relative">
            <div class="clicker" data-index="{index}" on:mouseover={openUp} on:mouseout={closeUp}>
            </div>
                <div class="serv {service.title}">
                    {#if hidden[index] == true}
                    <h2   data-before="{service.title}" >{service.title}</h2>
                    {:else}
                        <div class="hidden">
                            {#each service.services as ss}
                                <h3 data-before="{ss}" class="info">{ss}</h3>
                            {/each}
                        </div>
                    {/if}
                </div>
                
            </div>
        {/each}
        
    </div> 
</div>
{/if}