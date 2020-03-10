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
    .bg{
        background:white ;
    }
</style>

<div class="bg">
{#each posts as post}
    <h1>{post.title}</h1>
    {@html post.html}
{/each}
</div>