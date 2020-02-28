
<script>
    import Bio from '../components/Bio.svelte'
    import {employees} from '../components/Employees.js'
    console.log(employees)
</script>
<div class="bioHolder">
        <!-- <canvas class="" id="canvasHex"></canvas> -->
        {#each employees as employee}
            <Bio {...employee}/>
        {/each}
       
    </div>