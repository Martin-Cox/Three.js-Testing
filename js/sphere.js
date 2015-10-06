var width = window.innerWidth, height = window.innerHeight;

var renderer = new THREE.WebGLRenderer ( { antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene;



var sphereGeometry = new THREE.SphereGeometry(50, 16, 16);
var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x2E9AFE });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

scene.add(sphere);



var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 10000);

camera.position.y = 160;
camera.position.z = 400;

camera.lookAt(sphere.position);

scene.add(camera);


var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x262B30, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

scene.add(skybox);


var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);

scene.add(pointLight);



renderer.render(scene, camera);