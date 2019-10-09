<script>
    import Index from '../components/space.js'
    import {onMount} from 'svelte';
    onMount(()=>{
        let create3d = new Index();
    })
</script>
<style>
    #hh{
        height:2300px;
    }
    canvas{
        position:fixed;
        top:0;
    }
</style>
<div id="hh">
    <canvas id="canvas"></canvas>
</div>