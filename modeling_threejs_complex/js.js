// var canvas = document.getElementById('tutorial');
// var ctx = canvas.getContext('2d');

// ------------

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// var animate = function () {
// 	requestAnimationFrame( animate );

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// };

// animate();

import * as THREE from 'three';
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// //장면 생성
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// //카메라 세부 설정
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// //renderer 생성
// renderer.setSize(window.innerWidth, window.innerHeight);
// //화면 사이즈 설정
// document.body.appendChild(renderer.domElement);
// //html 화면에 구현

// const geometry = new THREE.BoxGeometry();
// //BoxGeometry 생성 , 이 안에 vertices(꼭짓점)과 faces(면)이 포함
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff80 } );
// // MeshBasicMatreial 생성 , color: 형광색 
// const cube = new THREE.Mesh( geometry, material );
// //Mesh를 이용하여 geometry에 material을 적용하고 자유롭게 움직일 수 있도록 함
// scene.add( cube );
// // 장면에 cube를 추가함

// camera.position.z = 5;
// //기본 카메라 셋팅은 (0,0,0)이므로 카메라의 z 값을 5로 함

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 1;
// controls.maxDistance = 500;

// const animate = function () {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   controls.update();
//   renderer.render(scene, camera);
// };

// animate();

//scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff80 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 500;

const animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
};

animate();
