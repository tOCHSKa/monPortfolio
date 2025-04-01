<template>
  <div id="particles-js" class="particles-container">
    <div class="text-white relative">
      <img
        src="../assets/asterisk-icon.svg"
        class="absolute svg-filter"
        height="200"
        width="200"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
/* global particlesJS */
import { onMounted } from "vue";

onMounted(() => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 }, // Nombre de particules
      size: { value: 1 }, // Taille des particules
      move: { speed: 2 }, // Vitesse de mouvement
      color: { value: "#21E786" }, // Couleur des particules
      line_linked: { enable: false, opacity: 0.5 }, // Lignes entre particules
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } }, // Réaction au hover
    },
  });
});
</script>

<style scoped>
.particles-container {
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Derrière le contenu */
  background: #040b11; /* Change selon ton design */
}
.svg-filter {
  filter: invert(90%) blur(5px) brightness(50%);
  mask-image: linear-gradient(to right, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 1) 100%);
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
