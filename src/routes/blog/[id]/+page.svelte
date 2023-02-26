
<body id="bodyabcd" >
    <h1 style="text-align: center; font-size: 60px; margin-top: 15px; margin-bottom: 20px; ">{text[id].name}</h1>
    <p>{@html text[id].text}</p>
    <canvas class="canvas3d1" width="200" height="200"></canvas>
    <Utterances reponame="CORE3215/SvelteBlog" issueTerm="title" theme="icy-dark"  />
    <title>{text[id].name}</title>
</body>

<script lang="ts" >
    import {Utterances} from '@codewithshin/svelte-utterances';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
	import * as THREE from 'three';
	import { onMount } from 'svelte';
    import type {PageData} from './$types';
    export let data: PageData;
    let text = data.texts;
    let stid = data.params.id as string;
    let id = parseInt(stid) - 1;
    
    onMount(() => {
		let scene = new THREE.Scene();
		let canvas = document.querySelectorAll('.canvas3d1');
		let loader = new GLTFLoader();
		let camera = new THREE.PerspectiveCamera(30,1);
		camera.position.set(0,0,7);
		scene.background = new THREE.Color('#212529')

		if(canvas != null){
			let renderer = new THREE.WebGLRenderer({
				canvas : canvas[0],
				antialias : true
			});
			renderer.outputEncoding = THREE.sRGBEncoding;
			loader.load('/shiba/scene.gltf', function(gltf){
				scene.add(gltf.scene)
				function animate(){
					requestAnimationFrame(animate);
					gltf.scene.rotation.y += 0.1;
					gltf.scene.rotation.x += 0.1;
					renderer.render(scene, camera);
					
				}
				animate();
			});
		}
  	});
</script>

<style>
    .canvas3d1{
          display: flex;
          
          left: 0;
          right: 0;
          margin:auto;
      }
    p{
        text-align: center;
        font-size: large;
    }

  </style>

