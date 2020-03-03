<script>
  import { onMount } from "svelte";
  let numCircles = 19;
  onMount(() => {
    var THREE = require("three");
    var scene = new THREE.Scene();
    var camera, renderer, canvas;
    var clock = new THREE.Clock();
    let g1 = new THREE.Mesh();
    let g2 = new THREE.Mesh();
    let g3 = new THREE.Mesh();

    init();

    function init() {
      canvas = document.getElementById("contain");
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
      });

      renderer.setPixelRatio(window.divicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      //Camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      let amb = new THREE.AmbientLight(0xf2e1ed, 0.1);
      camera.position.z = 15;
      let distance = 1;
      
      let x = 6;
      let factor = 1;
      for (let i = 0; i < numCircles; i++) {
        if (i == 0) {
          generateCircle(0, 0);
        } else {
          
          let  n = i;
            if (n>x) {
            distance++;
            x= x+distance*6;
          }
          let tempD = distance;
          let numC = distance * 6;
          let angle = (360 / numC) * (n - distance - 1);
          // if(distance%2 == 0){
          //   angle = angle + 360/(numC/2);
          //   if(n%distance-1 != 0 ){
          //     tempD = tempD - 0.25
          //   }
          // }
          if (distance>1){
          if(n%distance-1 != 0 ){
              tempD = tempD - 0.25
            }
          }
          generateCircle(tempD, angle);
        }
      }

      renderer.setClearColor(0x000000, 1);

      renderer.render(scene, camera);
      requestAnimationFrame(render);
      window.addEventListener("resize", onWindowResize, false);
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.outerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.outerHeight);
    }

    function generateCircle(d, r) {
      var geometry = new THREE.RingGeometry(0.97, 1, 64);
      var material = new THREE.MeshBasicMaterial({
        color: 0x1a1a1a,
        side: THREE.DoubleSide
      });
      var anchor = new THREE.Mesh();
      var mesh = new THREE.Mesh(geometry, material);
      anchor.add(mesh);
      mesh.position.y = d * 2;
      anchor.rotation.z = (Math.PI / 180) * r;
      scene.add(anchor);
      
    }

    function render() {
      let delta = clock.getDelta();
      camera.rotation.z = Math.PI/180 * delta;
      scene.traverse( function ( child ) {
                    if ( child.isMesh ) {                     
                        child.scale.set(Math.abs(Math.sin(clock.getElapsedTime()))+1, Math.abs(Math.sin(clock.getElapsedTime()))+1, 1);
                    }
                } );
      renderer.render(scene, camera);
      requestAnimationFrame(render);
     
    }
  });
</script>

<style>
  * {
    outline: #333333 solid 1px;
  }
  section {
    width: 100vw;
    height: 100vh;
    background: grey;
    display: flex;

    align-items: center;
    justify-content: center;
  }
  #contain {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    /* flex-wrap:wrap; */
    align-content: flex-start;
    overflow: hidden;
  }
</style>

<section>
  <canvas id="contain" />
</section>
