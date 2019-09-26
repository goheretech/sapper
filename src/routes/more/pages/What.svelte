<script>
    let hidden = [true,true,true]
    import { fade } from 'svelte/transition';
    let services = [
        {
            title: "Design",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cumque? Nam rem ullam consectetur eum explicabo in culpa fugiat eos dignissimos rerum odio harum eveniet perferendis corrupti iusto velit, fugit voluptatum nisi quidem id quo. Quidem nisi distinctio, magnam porro repellendus aperiam veniam ducimus nobis! Maxime minima totam, modi harum voluptas eaque vero sit aperiam possimus aut illum quo repellendus.",
            hidden: 'true'
        },{
            title: "Disrupt",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cumque? Nam rem ullam consectetur eum explicabo in culpa fugiat eos dignissimos rerum odio harum eveniet perferendis corrupti iusto velit, fugit voluptatum nisi quidem id quo. Quidem nisi distinctio, magnam porro repellendus aperiam veniam ducimus nobis! Maxime minima totam, modi harum voluptas eaque vero sit aperiam possimus aut illum quo repellendus.",
            hidden: 'true'
        },{
            title: "Dominate",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cumque? Nam rem ullam consectetur eum explicabo in culpa fugiat eos dignissimos rerum odio harum eveniet perferendis corrupti iusto velit, fugit voluptatum nisi quidem id quo. Quidem nisi distinctio, magnam porro repellendus aperiam veniam ducimus nobis! Maxime minima totam, modi harum voluptas eaque vero sit aperiam possimus aut illum quo repellendus.",
            hidden: 'true'
    }];
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
    }
    .serv{padding: 0 60px}
    
    .serv h2::before {
        color: white;
        content: attr(data-before);
        position: absolute;
        left: 0;
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
    .info{width:100% !important;}

    .serv h2{font-size:120px;position:relative;z-index:20;color:white;}
    @keyframes colorScroll {
    0% {
        background-position: 600%;
    }

    100% {
        background-position: 0%;
    }
}

</style>
        
<div data-aos="fade-up" data-aos-offset="-300" class="cc">
    
    <div class="services">
        {#each services as service, index}
            <div class="{index} service"  style="position:relative">
            <div data-index="{index}" on:mouseover={openUp} on:mouseout={closeUp} style="width:100%, height:100%; position:absolute; top:0;left:0; bottom:0; right:0; z-index:40;">
            </div>
                <div class="serv {service.title}">
                    <h2  data-before="{service.title}" >{service.title}</h2>
                    {#if hidden[index] != true}
                        <div transition:fade class="hidden" style="width:100%">
                            <p class="info">{service.content}</p>
                        </div>
                    {/if}
                </div>
                
            </div>
        {/each}
        
    </div> 
</div>