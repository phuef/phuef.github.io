<template>
  <canvas ref="experie nce" />
</template>

<script lang="ts">
import * as THREE from "three";
import Vue from "vue";
import { ref } from "vue";

//const renderer = new THREE.WebGLRenderer({ antialias: true });
/**
 onMounted(() => {
  const renderer = new THREE.WebGLRenderer({
    canvas: experience.value as unknown as HTMLCanvasElement,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  //renderer.setAnimationLoop(animation);
  //document.body.appendChild(renderer.domElement);
});
*/

// animation
/*
function animation(time: number) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}*/
export default Vue.extend({
  name: "ThreeDPage",
  mounted() {
    const experience = ref<HTMLCanvasElement | null>(null);
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const renderer = new THREE.WebGLRenderer({
      canvas: experience.value as unknown as HTMLCanvasElement,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  },
});
</script>
