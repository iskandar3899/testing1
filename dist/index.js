import * as THREE from 'three';

// Add scene and define camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add cube object
/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/

// Add Cone
const geometry = new THREE.ConeGeometry( 1, 1, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 5;

// Render the scene
function animate() {
	requestAnimationFrame( animate );
    // To add animation
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
