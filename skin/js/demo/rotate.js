/*高度*/
var height;
/*宽度*/
var width;
/*场景*/
var scene;
/*相机*/
var camera;
/*渲染器*/
var renderer;
/*立方体*/
var cube;
/*控制*/
var controls;
/*初始化光源*/
var light;
//初始化Three.js
function ReadyWebGL() {
	/*初始化场景的方法*/
	initSence();
	/*初始化模型*/
	initOject();
	/*初始化光线的方法*/
	initLight();
	/*初始化相机的方法*/
	initCamera();
	/*初始化渲染器的方法*/
	initThree();
	
}

	
	
/*初始化场景*/
function initSence() {
	scene = new THREE.Scene()
}
/*初始化模型*/
function initOject() {
	model_1();
	model_2();
}
/*初始化光源*/
function initLight() {
	light = new THREE.PointLight(0xFF0000, 1);
	light.position.set(300, 400, 200);
	scene.add(light);
	scene.add(new THREE.AmbientLight(0x333333));
}
/*初始化相机*/
function initCamera() {
	camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 1000);
	camera.position.set(0, 200, 600);
	camera.lookAt(scene.position);
	controls = new THREE.OrbitControls(camera);
	
		
}
/*初始化渲染器*/
function initThree() {
	renderer = new THREE.WebGLRenderer({ antialias:true});
	renderer.setSize(800, 600);
	document.body.appendChild(renderer.domElement);
	renderer.render(scene, camera);
	controls.addEventListener('change', render);
}
/*模型一*/
function model_1(){
	var geometry = new THREE.BoxGeometry(40, 40, 40);
	var material = new THREE.MeshLambertMaterial({
		color: 0xff0000
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(-40,0,0);
	scene.add(mesh);
	
}
/*模型一*/
function model_2(){
	var geometry = new THREE.BoxGeometry(40, 40, 40);
	var material = new THREE.MeshLambertMaterial({
		color: 0xff0000
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(40,0,0);
	scene.add(mesh);
	
}

function render() {
	renderer.render(scene,camera);
}
