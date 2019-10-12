
        <script>
            import * as animateScroll from "svelte-scrollto";
            import {clients} from '../components/Clients.js'
            import { fade } from 'svelte/transition';
            let clientID;
            export let viewerOpen = false;
            import Review from '../components/Review.svelte'
            function checkHash(){
                let spot = document.getElementById("hh");
                animateScroll.scrollTo({element: spot, offset: -270}); 
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
                font-size:100px !important;
                border: none;
                color:white;
                width:100%;
                font-family: 'Abel', sans-serif;
                text-align: center;
                padding-bottom: 20px;
                padding-left: 50px;
                padding-right: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                outline:none;
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
            button{
                border:white 1px solid;
                background:transparent;
                color:white;
                padding: 15px 30px;
                margin-top:50px;
            }

             @media screen and (max-width:500px) {
                    #hh{
                        margin: 0;
                    }
                    .goTo{
                        font-size:42px !important;
                        padding:20px 10px;
                        margin-top:10px;
                    }
                    .goTo span{
                        font-size: 42px;
                        padding:10px;
                    }
                    .goTo span::before{
                        padding:10px;
                    }
                }
        </style>
        <div data-aos="fade-up" data-aos-offset="-300" class="cc" style="width:100%" id="hh">
        {#if !viewerOpen}
            {#each clients as client,index}
                 <button  class="goTo" on:click={() => {clientID = client.slug; checkHash()}}><span data-before="{client.name}">{client.name}</span></button> 
            {/each}
        {/if}  
        {#if viewerOpen}
            <div class="clientHolder">
                <Review clientID={clientID}/>
                <button id="back" >View Website</button>
                <button id="back" on:click="{checkHash}">Back</button>
            </div>
        {/if}
        </div>