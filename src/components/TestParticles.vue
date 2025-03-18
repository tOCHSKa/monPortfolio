<template>
    <div id='particles-js' class='particles-container'></div>
  </template>

<script setup>
/* global particlesJS */
import { onMounted } from 'vue';

onMounted(() => {
  particlesJS('particles-js', {
    particles: {
      number: { value: 100 }, // Nombre de particules
      size: { value: 3 }, // Taille des particules
      move: { speed: 2 }, // Vitesse de mouvement
      color: { value: '#21E786' }, // Couleur des particules
      line_linked: { enable: false, opacity: 0.5 }, // Lignes entre particules
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } }, // Réaction au hover
    },
  });
});
</script>

<style scoped>
  .particles-container {
    width: 100vw;
    height: 100vh;
    z-index: 0; /* Derrière le contenu */
    background: #040B11; /* Change selon ton design */
  }
</style>
