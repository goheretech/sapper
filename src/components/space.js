import { init } from 'svelte/internal';

export default class Index{
    constructor(){
        let THREE = require('three');
        let camera, scene = new THREE.Scene(), renderer, canvas;
        let loader = new THREE.TextureLoader();
       
        let start = {
            camera: new THREE.Vector3(70, 15, 200),
            sun: new THREE.Vector3(1340, 0, 620),
            main: new THREE.Vector3(0, 0, 0),
            sec: new THREE.Vector3(100, 0, -600),
            third: new THREE.Vector3(80, 0, 0),
        };
        let mid = {
            camera: new THREE.Vector3(250, 45, -390),
            mainPivot: 0,
            secPivot: -0.1 * Math.PI,
            thirdPivot: 1.7 * Math.PI
        };
        let end = {
            camera: new THREE.Vector3(280, 30, -570),
            mainPivot: 0,
            secPivot: -0.12 * Math.PI,
            thirdPivot: 2.75 * Math.PI
        };
        let planets = [];
        let lights = [];
        let pivots = [];
        let empties = [];
        let clouds = [];
        let cloudPos = {
            start: new THREE.Vector3(90, -10, 100),
            mid: new THREE.Vector3(-150, -10, -20),
            end: new THREE.Vector3(-367, -19, -200)
        };
        let colors = {
            orange: new THREE.Color("hsl(32, 85%, 44%)"),
            blue: new THREE.Color("hsl(186, 85%, 44%)"),
            purple: new THREE.Color("hsl(308, 85%, 44%)")
        }
        let clock = new THREE.Clock(),
            phase = 0,
            delta;
        let fileArray = [
                { name: 'earth', url: 'GAS1-ns.png' },
                { name: 'moon', url: 'GAS2-ns.png' },
                { name: 'planet', url: 'GAS3-ns.png' }
            ];
        let promiseArray = [],
            texturePromiseArray = [],
            path = 'img/Planets/',
            texturesArray = [];

        init();
        function init(){
            canvas = document.getElementById('canvas');
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
                0.1,
                3000
            );
            camera.position.set(start.camera.x, start.camera.y, start.camera.z);
            scene.add(camera);
            // createClouds(cloudPos.start, 9, 4, 0.5, 5);
            // createClouds(cloudPos.mid, 15, 6, 2, 10);
            // createClouds(cloudPos.end, 7, 5, 3, 1);
            loadTextures();
            renderer.setClearColor(0xeb4034, 0);
        }
        function render(){            
            let delta = clock.getDelta();            
            planets.forEach((planet, i)=>{
                planet.obj.rotation.y += (delta/10*(i-0.5) * 20 * Math.PI) / 180;
            })
            clouds.forEach(p => {
                p.rotation.z -= 0.001;
            });
            let sin = Math.sin(clock.elapsedTime/1000) ;
            
            lights.forEach(p =>{
                p.color.offsetHSL(delta / 5, delta, 0);
                
                console.log(p.color);
                
            })
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        function createClouds(pos, num, x,y,z){
            loader.load('img/smoke-1.png', ((texture)=>{
                const geo = new THREE.PlaneBufferGeometry(50, 50);
                const mat = new THREE.MeshLambertMaterial({
                    map: texture,
                    transparent: true
                });
                for (let p = 0; p < num; p++) {
                    const cloud = new THREE.Mesh(geo,mat)
                    cloud.position.set(
                        pos.x + (Math.random() * 20 * x - 10*x),
                        pos.y + (Math.random() * 20 * y - 10*y),
                        pos.z + (Math.random() * 20 * z - 10*z)
                    );
                    cloud.rotation.z = Math.random()* 2 * Math.PI;
                    cloud.material.opacity = 0.65;
                    clouds.push(cloud);
                    scene.add(cloud);
                }
            }))
            createLight(colors.orange);
            createLight(colors.blue);
            createLight(colors.purple);

            function createLight(color){
                let params = {
                    intensity: 10,
                    distance: 200,
                    falloff: 10
                };
                const light = new THREE.PointLight(
                    color,
                    params.intensity,
                    params.distance,
                    params.falloff
                );
                light.position.set(
                    pos.x + (Math.random() * 10 - 5), 
                    pos.y + (Math.random() * 10 - 5), 
                    pos.z + (Math.random() * 5)
                );
                lights.push(light)
                scene.add(light);
            }
        }
        function loadTextures(callback){
            
            fileArray.forEach(function(fileOBJ) {
                texturePromiseArray.push(
                    new Promise(function(resolve, reject) {
                        loader.load(
                            path + fileOBJ.url,

                            function(texture) {
                                texturesArray.push(texture);
                                var modelOBJ = new Object();

                                modelOBJ[fileOBJ.name] = texture;

                                if (
                                    modelOBJ[fileOBJ.name] instanceof
                                    THREE.Texture
                                )
                                    resolve(modelOBJ);
                            },

                            function(xhr) {
                                console.log(
                                    (xhr.loaded / xhr.total) * 100 + '% loaded'
                                );
                            },

                            function(xhr) {
                                reject(
                                    new Error(
                                        xhr +
                                            'An error occurred loading while loading' +
                                            fileOBJ.url
                                    )
                                );
                            }
                        );
                    })
                );
            });
            
            Promise.all(texturePromiseArray).then(
                function(textures) {    
                    generateSpace();
                    if (
                        callback &&
                        typeof callback === 'function' &&
                        fileArray.length == textures.length
                    ){ 
                        callback(textures);      
                    }      
                }
            );
        }
        function generateSection(){

        }
        function generateSpace(){
            genSun();
            createPlanet('main', 60, texturesArray[0], start.main, scene, 25, 5);
            createPlanet('secondary', 22, texturesArray[1], start.sec, pivots[0].obj, 20, 5);
            createPlanet('third', 4, texturesArray[2], start.third, empties[1].obj, 15, 0);
            console.log(planets);                        
            renderer.render(scene, camera);
            requestAnimationFrame(render);
            window.addEventListener('scroll', onScroll);            
        }
        function genSun() {
            let sunMat = new THREE.MeshStandardMaterial({
                emissiveIntensity: 1,
                emissive: 0xf5e6f0 // darkgrey
            });
            let sunGeo = new THREE.IcosahedronGeometry(0.2, 6);
            let sun = new THREE.PointLight(0xeee4f5, 1.1, 15000000, 0.01);
            sun.add(new THREE.Mesh(sunGeo, sunMat));
            scene.add(sun);
            sun.position.set(start.sun.x, start.sun.y, start.sun.z);
            planets.push({
                name: 'sun',
                obj: sun
            })
        }
        function createPlanet(name, size, texture, position, parent, detail, angle) {
            let pivot = new THREE.Mesh;
            let empty = new THREE.Mesh;
            let planetMat = new THREE.MeshStandardMaterial({
                map: texture,
                // color:0xeee4f5,
                metalness: 0.1,
                roughness: 0.5
            });
            let planetGeo = new THREE.SphereGeometry(
                size,
                detail,
                detail
            );
            let planet = new THREE.Mesh(planetGeo, planetMat);
            pivot.rotation.z = Math.PI/180 * angle;
            parent.add(pivot)         
            pivot.add(planet);
            pivot.add(empty);
            planet.position.set(position.x, position.y, position.z);
            empty.position.set(position.x, position.y, position.z);
            planets.push({
                name: name,
                obj: planet
            });
            pivots.push({
                name: name+'Pivot',
                obj: pivot
            });
            empties.push({
                name: name+'Empty',
                obj: empty
            });
        }
        
        function onWindowResize(){

        }
        function onScroll(){
            //Get percent scrolled
            var h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            var y =
                ((h[st] || b[st]) /
                    ((h[sh] || b[sh]) - h.clientHeight)) *
                100; //0 to 100
            if (y < 50){
                let v = y * 0.02;
                console.log(v);
                camera.position.x = lerp(start.camera.x, mid.camera.x, v);
                camera.position.y = lerp(start.camera.y, mid.camera.y, v);
                camera.position.z = lerp(start.camera.z, mid.camera.z, v);

                pivots[1].obj.rotation.y = lerp(0, mid.secPivot, v)                
                pivots[2].obj.rotation.y = lerp(0, mid.thirdPivot, v)                
            }else {
                let v = (y * 0.02) - 1
                console.log(v)
                camera.position.x = lerp(
                    mid.camera.x,
                    end.camera.x,
                    v
                );
                camera.position.y = lerp(
                    mid.camera.y,
                    end.camera.y,
                    v
                );
                camera.position.z = lerp(
                    mid.camera.z,
                    end.camera.z,
                    v
                );

                pivots[1].obj.rotation.y = lerp(
                    mid.secPivot,
                    end.secPivot,
                    v
                );    
                pivots[2].obj.rotation.y = lerp(
                    mid.thirdPivot,
                    end.thirdPivot,
                    v
                );    
            }
            
        }
        function lerp(min, max, value){
            return (max - min) * value + min;
        }
        function removeLoad(){
            
        }
    }
}