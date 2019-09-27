<script>
    export let name;
    export let title;
    export let nick;
    export let bioStart;
    export let bio;
    export let picture;
    export let stats = [];
    export let side;

</script>

<div data-aos="fade-up" data-aos-offset="-300" class="bio chris">
            <div class="whoCol left">
                {#if side == 'right'}
                    <h5 class="name">
                        {name} - {title}
                    </h5>
                    <h2 class="nick colorChange">
                        {nick}
                    </h2>
                    <h3 class="main">
                        {bioStart}
                    </h3>
                    <p class="desc">{bio}
                    </p>
                {/if}
                {#if side == 'left'}
                    <div class="backNeb">
                        <div class="headShot" style="background-image:url({picture})"></div>
                    </div>
                    <!-- <div class="stats">
                        <h5>{stats[0].name}</h5>
                        <div class="statLine c1">
                            <div class="inside" style='width:{stats[0].value}%'></div>
                        </div>
                    </div>
                    <div class="stats">
                        <h5>{stats[1].name}</h5>
                        <div class="statLine c2">
                            <div class="inside" style='width:{stats[1].value}%'></div>
                        </div>
                    </div>
                    <div class="stats">
                        <h5>{stats[2].name}</h5>
                        <div class="statLine c3">
                            <div class="inside" style='width:{stats[2].value}%'></div>
                        </div>
                    </div> -->
                {/if}
            </div>
            <div class="whoCol right">
            {#if side == 'right'}
                <div class="backNeb">
                        <div class="headShot" style="background-image:url({picture})"></div>
                    </div>
                <!-- <div class="stats">
                    <h5>{stats[0].name}</h5>
                    <div class="statLine c1">
                        <div class="inside" style='width:{stats[0].value}%'></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>{stats[1].name}</h5>
                    <div class="statLine c2">
                        <div class="inside" style='width:{stats[1].value}%'></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>{stats[2].name}</h5>
                    <div class="statLine c3">
                        <div class="inside" style='width:{stats[2].value}%'></div>
                    </div>
                </div> -->
        {/if}
        {#if side == 'left'}
             <h5 class="name">
                {name} - {title}
            </h5>
            <h2 class="nick colorChange">
                {nick}
            </h2>
            <h3 class="main">
                {bioStart}
            </h3>
            <p class="desc">{bio}
            </p>
        {/if}
            </div>
        </div>