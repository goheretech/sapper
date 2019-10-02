<script>
      let numStars;
  let x =0;
  let stars = [];
  numStars = 10;
  let width = 1920;
  let height = 1080;

  for (let i = 0; i < numStars; i++) {
    genCoord();
  }
  

  function genCoord() {
    console.log(stars);
    let x = parseInt(Math.random() * width);
    let y = parseInt(Math.random() * height);
    let hg = parseInt(Math.random() * 50 + 10);
    let color = parseInt(Math.random() * 360);
    let opacity = parseInt(Math.random() * 50 + 50)/100;
    stars.push({ 
        x: x, 
        y: y, 
        hue: color,
        height: hg,
        opacity: opacity,
        opV: opacity
    });
    // animation();
    
  }
  function animation(){
        x++
        if(document){
          let foundStars = document.getElementById("starfield");
          // console.log(foundStars);
          if(foundStars){
              // foundStars.style.opacity = Math.abs(Math.sin(x/10)); 

          }
        }
        
        window.requestAnimationFrame(animation);
    }
  
</script>

<style>
  #starfield {
    position: absolute;
    width: 100vw;
    height: 100%;
    opacity:1;
  }
  .star {
    position: fixed;
    width: 40px;
    height: 40px;
    /* background-color:black; */
    background: url("img/Planets/star1.png");
    background-size: cover;
  }
</style>

  <div id="starfield" style="opacity:1">
  {#if stars.length < 3}
    Small Potatoes
  {:else}
      {#each stars as star}
      <div
        class="star"
        style="left:{star.x}px; top:{star.y}px; filter:hue-rotate({star.hue}deg); width:{star.height}px; height:{star.height}px; opacity:{star.opacity}"/>
    {/each}
  {/if}
    
  </div>

