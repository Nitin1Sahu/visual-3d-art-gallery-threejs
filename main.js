import "./style.css";
import * as THREE from "three";
// Scene
const scene = new THREE.Scene(); // create the scene
// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
// Camera
const camera = new THREE.PerspectiveCamera(
    // field of view
    75,
    sizes.width / sizes.height,
    0.1,
    100,
);
// Move the camera 5 unit
camera.position.z = 5;
scene.add(camera);
// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0xffffff, 1);
// Add the renderer to our html
document.body.appendChild(renderer.domElement);
// Lights
let ambientLight = new THREE.AmbientLight(0x101010, 1.0); // color, intensity, distance, decay
// ambientLight.position = camera.position; // Light follow camera
ambientLight.position.copy(camera.position); // Light follow camera
scene.add(ambientLight);
// Directional Light
let sunLight = new THREE.DirectionalLight(0xdddddd, 1.0); // color intensity
sunLight.position.y = 15;
scene.add(sunLight);
//Object
const geometry = new THREE.BoxGeometry(1, 1, 1, 20, 20, 20);
const material = new THREE.MeshBasicMaterial({
    color: 0x111111,
    wireframe: true,
});
const cube = new THREE.Mesh(geometry, material); // create cute with geometry andd material
scene.add(cube); // add cube to scene

// Controls
// EventListener for, when we press the keys
window.addEventListener("keydown", onKeyDown, false);
// create the floor plane.
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: "green",
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
// function when key is pressed, execute the function
function onKeyDown(event) {
    switch (event.keyCode) {
        case 37: // left
            cube.translateX(0.05);
            break;
        case 38: // top
            cube.translateY(-0.05);
            break;
        case 39: // right
            cube.translateX(-0.05);
            break;
        case 40: // bottom
            cube.translateY(0.05);
            break;
    }
}
// Animate renderer loop
const Animate = () => {
    requestAnimationFrame(Animate);
    // Update
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Render
    renderer.render(scene, camera);
};
Animate();
