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
    .sc{
        background:black;
        padding: 100px 0;
        z-index: 999;
        color:white;
    }
</style>
<div class="sc">
    {#each posts as insight}
            <a href="/insights"><h3>Insights</h3></a>
    {/each}
</div>