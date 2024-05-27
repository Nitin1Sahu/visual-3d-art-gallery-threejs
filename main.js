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
let sunLight = new THREE.DirectionalLight(0xdddddd, 1.0) // color intensity
sunLight.position.y = 15;
scene.add(sunLight);
// Render
renderer.render(scene, camera);