
        <script>
            import {clients} from '../components/Clients.js'
            import { fade } from 'svelte/transition';
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
            .clientHolder{
                display:flex;
                flex-direction: column;
                align-items:center;
                justify-content: space-evenly;
            }
            button{
                border:white 1px solid;
                background:transparent;
                color:white;
                padding: 15px 30px;
                margin-top:50px;
            }
        </style>
        <div data-aos="fade-up" data-aos-offset="-300" class="cc">
        {#if !viewerOpen}
            {#each clients as client,index}
                 <h2  on:click="{() => {clientID = client.slug; console.log(client.slug); checkHash()}}">{client.name}</h2> 
            {/each}
        {/if}  
        {#if viewerOpen}
            <div class="clientHolder">
                <Review clientID={clientID}/>
                <button on:click="{checkHash}">Back</button>
            </div>
        {/if}

        </div>