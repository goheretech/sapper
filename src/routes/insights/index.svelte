<script>
import { onMount } from "svelte";

    let posts = [];

    const apiURL = "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce";
    let data = [];
    onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
        posts = data.posts;
        console.log('articles: ',posts);
    });
</script>

<style>
    
    .bg1{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .col{
        padding:5vw 10vw;
        margin: 0vw 10vw;
        background:white ;
    }
</style>

<div class="bg1">
{#each posts as post}
    <div class="col">
        <a href="insights/{post.slug}">
            <h1>{post.title}</h1>
        </a>
    </div>
{/each}
</div>