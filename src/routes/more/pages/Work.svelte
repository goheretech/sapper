
        <script>
            import {clients} from '../components/Clients.js'
            let clientID;
            export let viewerOpen = false;
            import Review from '../components/Review.svelte'
            function checkHash(){
                viewerOpen = !viewerOpen;
            }
        </script>
        <style>
            .cc{margin: 200px 0px;}
            h2{
                padding-bottom:20px;
                font-size:90px !important;
                
            }
            .viewer{position: fixed; top:50px; left:50px; right:50px; bottom:50px; z-index:20000; background:black;}
        </style>
        <div data-aos="fade-up" data-aos-offset="-300" class="cc">
        {#if !viewerOpen}
            {#each clients as client,index}
                <h2 on:click="{() => {clientID = client.slug; console.log(client.slug); checkHash()}}">{client.name}</h2>
            {/each}   
        {:else}
            <button on:click="{checkHash}">Back</button>
            <Review clientID={clientID}/>
        {/if}

        </div>