var scene = new THREE.Scene();
			var geometry = new THREE.BoxGeometry(100, 100, 100);
			var material = new THREE.MeshLambertMaterial({
				color: 0xff0000
			});
			mesh = new THREE.Mesh(geometry, material);
			scene.add(mesh);
			var light = new THREE.PointLight(0xFF0000, 1);
			light.position.set(300, 400, 200);
			scene.add(light);
			scene.add(new THREE.AmbientLight(0x333333));
			var camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
			camera.position.set(300, 400, 200);
			camera.lookAt(scene.position);
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize(800, 600);
			document.body.appendChild(renderer.domElement);
			renderer.render(scene,camera);
			function render(){
				renderer.render(scene,camera);
				
			}
			var controls = new THREE.OrbitControls(camera);
			controls.addEventListener('change',render)