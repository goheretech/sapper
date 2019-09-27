<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    var scene = new THREE.Scene();
    let camera, renderer, canvas;
    let clock = new THREE.Clock();
    let loader = new THREE.TextureLoader();
    let amb;
    let fileArray = [
    { name: "earth", url: "GAS1.png" },
    { name: "moon", url: "GAS2.png" },
    { name: "planet", url: "GAS3.png" }
    ];
    let promiseArray = [],
    path = "img/Planets/";
    let texturesArray = [];
    let earthMat, planetMat, moonMat;
    let planet, moon, earth;
    let planetGeo, moonGeo, earthGeo;
    let loaded = false;
    onMount(() => {
    loaded = true;
    loadTextures();
    init();
    });

    function init() {
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(window.divicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //Camera
    camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1000,
        300000
    );
    camera.position.z = 46000;
    amb = new THREE.AmbientLight(0xf2e1ed, 0.1);
    scene.add(amb);
    renderer.setClearColor(0x050505, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    }

    function render() {
    let delta = clock.getDelta();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    }

    function loadTextures(callback) {
    fileArray.forEach(function(fileOBJ) {
        promiseArray.push(
        new Promise(function(resolve, reject) {
            loader.load(
            path + fileOBJ.url,

            function(texture) {
                texturesArray.push(texture);
                var modelOBJ = new Object();

                modelOBJ[fileOBJ.name] = texture;

                if (modelOBJ[fileOBJ.name] instanceof THREE.Texture)
                resolve(modelOBJ);
            },

            function(xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },

            function(xhr) {
                reject(
                new Error(
                    xhr + "An error occurred loading while loading" + fileOBJ.url
                )
                );
            }
            );
        })
        );
    });

    Promise.all(promiseArray)
        .then(
        function(textures) {
            createMaterials(textures);

            if (
            callback &&
            typeof callback === "function" &&
            fileArray.length == textures.length
            )
            callback(textures);
        },
        function(error) {
            callback(error);
        }
        )
        .then(() => {
            createPlanets();
        },
        function(error) {
            callback(error);
        })
        .then(() => {
            loaded = true;
        },
        function(error) {
            callback(error);
        });
    }

    function createPlanets(){
        planetGeo = new THREE.SphereGeometry(5000, 5000, 20, 20);
        planet = new THREE.Mesh(planetGeo, planetMat);
        moonGeo = new THREE.SphereGeometry(1500, 1500, 20, 20);
        moon = new THREE.Mesh(moonGeo, moonMat);
        earthGeo = new THREE.SphereGeometry(500, 500, 20, 20);
        earth = new THREE.Mesh(earthGeo, earthMat);

        earth.position.x = 6000;
        planet.position.x = -16000;
        scene.add(earth);
        scene.add(planet);
        scene.add(moon);
        
    }

    function createMaterials(textures) {
    earthMat = new THREE.MeshStandardMaterial({
        map: texturesArray[0],
        metalness: 0.1,
        roughness: 0.5
    });

    moonMat = new THREE.MeshStandardMaterial({
        map: texturesArray[1],
        metalness: 0.1,
        roughness: 0.5
    });

    planetMat = new THREE.MeshStandardMaterial({
        map: texturesArray[2],
        metalness: 0.1,
        roughness: 0.5
    });
    }
</script>

<style>
  h1 {
    color: white;
    z-index: 2;
    position: relative;
  }
  canvas {
    position: fixed;
    top: 0;
  }
</style>
{#if !loaded}
    <h1>THREE Loading</h1>
{/if}
<canvas id="canvas" />
