
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
            .clientHolder{
                display:flex;
                flex-direction: column;
                align-items:center;
                justify-content: space-evenly;
            }
            .goTo{
                background:transparent;
                padding:50px;
                font-size:100px !important;
                border: none;
                color:white;
                width:100%;
                font-family: 'Abel', sans-serif;
                text-align: center;
                padding-bottom: 50px;
                padding-left: 50px;
                padding-right: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
            }

            .goTo span{

                font-size: 145px;
                font-weight:bold;
                position: relative;
                margin: 0;
                padding: 40px 0;
                background-image: linear-gradient(to right, #d624a6, #f7a140, green, #22d8d8, purple, #d624a6);
                background-clip: text;
                background-size: 600%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: white;
                cursor: pointer;
                animation: colorScroll 20s linear infinite;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2;

            }

            .goTo span:hover{
                -webkit-text-fill-color: transparent;
            }

            .goTo span::before {
                color: white;
                content: attr(data-before);
                position: absolute;
                top: 40px;
                z-index: -1;    
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-image: linear-gradient(to right, #d624a6, #f7a140, green, #22d8d8, purple, #d624a6);
                background-size: 600%;
                animation: colorScroll 20s linear infinite;
                filter:blur(8px)
            }
            #back{
                border:white 1px solid;
                background:transparent;
                color:white;
                padding: 15px 30px;
                margin-top:50px;
            }
        </style>
        <div data-aos="fade-up" data-aos-offset="-300" class="cc" style="width:100%">
        {#if !viewerOpen}
            {#each clients as client,index}
                 <button  class="goTo" on:click="{() => {clientID = client.slug; console.log(client.slug); checkHash()}}"><span data-before="{client.name}">{client.name}</span></button> 
            {/each}
        {/if}  
        {#if viewerOpen}
            <div class="clientHolder">
                <Review clientID={clientID}/>
                <button id="back" on:click="{checkHash}">Back</button>
            </div>
        {/if}

        </div>