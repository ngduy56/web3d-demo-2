let scene;
let camera;
let renderer;
let pointLight;
let ambientLight;
let back, control, model;
let car,logo;
function init() {
    scene = new THREE.Scene();
    // camera
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(500, 50, 500);
    camera.rotation.y = 45/180*Math.PI;
    // renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // light   
    hlight = new THREE.AmbientLight (0x404040,10);
    scene.add(hlight);
    directionalLight = new THREE.DirectionalLight(0xffffff,10);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    light = new THREE.PointLight(0x404040,6);
    light.position.set(0,300,500);
    scene.add(light);
    light2 = new THREE.PointLight(0x404040,20);
    light2.position.set(500,100,0);
    scene.add(light2);
    light3 = new THREE.PointLight(0x404040,6);
    light3.position.set(0,100,-500);
    scene.add(light3);
    light4 = new THREE.PointLight(0x404040,6);
    light4.position.set(-500,300,500);
    scene.add(light4);
    // background
    back = new THREE.TextureLoader().load("anh.PNG");
    scene.background = back;
    // controll
    control = new THREE.OrbitControls(camera, renderer.domElement);
    control.addEventListener('change', renderer)
    // load model
    model = new THREE.GLTFLoader();
    model.load('./3d/scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(100,100,100);
        scene.add(gltf.scene);
        animate();
    });
    model = new THREE.GLTFLoader();
    model.load('./3d2/scene.gltf', function (gltf) {
        logo = gltf.scene.children[0];
        logo.scale.set(50,50,50);
        logo.position.set(-20,100,-50);
        logo.rotation.z = -2.57;
        scene.add(gltf.scene);
        animate();
    });
}
// animation
function animate() {
    requestAnimationFrame(animate);
    car.rotation.z -= 0.005;
    renderer.render(scene, camera);
}
init();