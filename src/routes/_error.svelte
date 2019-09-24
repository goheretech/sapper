<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	*{color:white;}
	.holder{
		margin-top:300px;
		display:flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

	}
	h1{font-size:166px;padding:0;margin:0;}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<div class="holder">
	<h1>{status}</h1>

	<p>{error.message}</p>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>

