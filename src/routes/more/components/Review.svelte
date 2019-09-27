<script>
    export let clientID;
    import {clients} from '../components/Clients.js'
    $: console.log(clientID);

</script>
<style>
    h3{
        padding:0; margin:0;
    }
</style>
{#each clients as client}
        {#if client.slug == clientID}
            <h2>{client.name}</h2>
            <p>{client.desc}</p>
            
                {#each client.services as service}
                    <h3>{service}</h3>
                {/each}
            
        {/if}
{/each}