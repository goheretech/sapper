
<script>
    export let particleNumber = 63;
    var THREE = require('three');
    var POSTPROCESSING =  require("postprocessing");
    let scene, camera, renderer;
    let cloudParticles = [];
    let colors = [
        new THREE.Color("hsl("+parseInt(Math.random()*250)+", 100%, 50%)"),
        new THREE.Color("hsl("+parseInt(Math.random()*250)+", 50%, 70%)"),
        new THREE.Color("hsl("+parseInt(Math.random()*250)+", 100%, 90%)")
    ]
    let newHue, newS, newL;
    let redLight, orangeLight, blueLight;
    var clock = new THREE.Clock();
    function init() {
        console.log(colors);
        const canvas = document.getElementById('nebula');        
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
        camera.position.z = 320;
        camera.rotation.x = 1.16;
        camera.rotation.y = -0.12;
        camera.rotation.z = 0.27;
        createCloud();
        setLights();
        let ambient = new THREE.AmbientLight(0x555555);
        scene.add(ambient);
        renderer = new THREE.WebGLRenderer({ 
            canvas: canvas,
            antialias: true,
            alpha: true 
        });
        renderer.setSize(window.innerWidth,window.innerHeight);
        scene.fog = new THREE.FogExp2(0x03544e, 0.000);
        renderer.setClearColor( 0x000000, .1 );
        document.body.appendChild(renderer.domElement);
        const bloomEffect = new POSTPROCESSING.BloomEffect({
            blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
            kernelSize: POSTPROCESSING.KernelSize.SMALL,
            useLuminanceFilter: true,
            luminanceThreshold: 0.2,
            luminanceSmoothing: 0.75
            });
        bloomEffect.blendMode.opacity.value = 1.5;
        render();
    }
    function render() {
        let delta = clock.getDelta();
        
        cloudParticles.forEach(p => {
            p.rotation.z -=0.001;
        });

        newHue= [Math.abs(Math.sin(clock.elapsedTime/3)*200), Math.abs(Math.sin(clock.elapsedTime/6)*200),Math.abs(Math.sin(clock.elapsedTime/8)*200)]
        newS= [parseInt(Math.abs(Math.sin(clock.elapsedTime/11)*100)), parseInt(Math.abs(Math.sin(clock.elapsedTime/6)*100)),parseInt(Math.abs(Math.sin(clock.elapsedTime/20)*100))]
        newL= [parseInt(Math.abs(Math.sin(clock.elapsedTime/7)*100)), parseInt(Math.abs(Math.sin(clock.elapsedTime/12)*100)),parseInt(Math.abs(Math.sin(clock.elapsedTime/13)*100))]

        colors.forEach((color, i) => {
            colors[i] = new THREE.Color('hsl('+newHue[i]+', '+newS[i]+'%, 50%)')
        });
        orangeLight.color = colors[0];
        redLight.color = colors[1];
        blueLight.color = colors[2];

        orangeLight.position.z += Math.sin(clock.elapsedTime)*2;
        redLight.position.z -= Math.sin(clock.elapsedTime)*2;
        blueLight.position.z += Math.cos(clock.elapsedTime)*2;

        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }
    function setLights(){
        let directionalLight = new THREE.DirectionalLight(0xff8c19);
        directionalLight.position.set(0,0,1);
        scene.add(directionalLight);

        orangeLight = new THREE.PointLight(colors[0],50,450,1.7);
        orangeLight.position.set(200,300,100);
        
        scene.add(orangeLight);
        redLight = new THREE.PointLight(colors[1],50,450,1.7);
        console.log(redLight);
        
        redLight.position.set(100,300,150);
        scene.add(redLight);
        blueLight = new THREE.PointLight(colors[2],50,450,2.7);
        blueLight.position.set(200,300,200);
        scene.add(blueLight);

    }
    function createCloud(){
        let loader = new THREE.TextureLoader();
        loader.load("img/smoke-1.png", function(texture){
            let cloudGeo = new THREE.PlaneBufferGeometry(500,500);
            let cloudMaterial = new THREE.MeshLambertMaterial({
                map:texture,
                transparent: true
            });
            for(let p=0; p<particleNumber; p++) {
                let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                cloud.position.set(
                    Math.random()*800 -400,
                    500,
                    Math.random()*500-500
                );
                cloud.rotation.x = 1.16;
                cloud.rotation.y = -0.12;
                cloud.rotation.z = Math.random()*2*Math.PI;
                cloud.material.opacity = 0.35;
                cloudParticles.push(cloud);
                scene.add(cloud);
            }
        });
    }
    init();
</script>
