<template>
    <div class="w-[500px] mx-auto">
      <p>Je suis un p avec un <span :style='{ backgroundSize: `${bgSize}% 100%` }'
        class='text_gradient'>SpanSpanSpan</span></p>
      <p>Je suis un p avec un <span :style='{ backgroundSize: `${bgSize1}% 100%` }'
        class='text_gradient'>SpanSpan</span></p>
      <p>Je suis un p avec un <span :style='{ backgroundSize: `${bgSize2}% 100%` }'
        class='text_gradient'>SpanSpanSp</span></p>
    </div>
  </template>

<script setup>
/* eslint-disable */
import { ref, onMounted, onUnmounted } from 'vue';

  const bgSize = ref(0); // Taille initiale du background
  const bgSize1 = ref(10); // Initialiser à 10% pour éviter les valeurs négatives
  const bgSize2 = ref(20); // Initialiser à 20% pour éviter les valeurs négatives
  const lastScrollTop = ref(0); // Stocke la dernière position du scroll
  
  const MIN_BG_SIZE = 0; // Taille minimale du fond (0%)
  const MAX_BG_SIZE = 100; // Taille maximale du fond (100%)
  
  const updateBackgroundSize = () => {
    const currentScroll = window.scrollY;
  
    if (currentScroll > lastScrollTop.value) {
      // Augmente la taille
      bgSize.value = Math.min(MAX_BG_SIZE, bgSize.value + 4);
      bgSize1.value = Math.min(MAX_BG_SIZE, bgSize1.value + 3);
      bgSize2.value = Math.min(MAX_BG_SIZE, bgSize2.value + 2);
    } else if (currentScroll < lastScrollTop.value) {
      // Diminue la taille
      bgSize.value = Math.max(MIN_BG_SIZE, bgSize.value - 4);
      bgSize1.value = Math.max(MIN_BG_SIZE, bgSize1.value - 4);
      bgSize2.value = Math.max(MIN_BG_SIZE, bgSize2.value - 4);
    }
  
    lastScrollTop.value = currentScroll; // Met à jour la position du scroll
  };
  
  onMounted(() => {
    window.addEventListener('scroll', updateBackgroundSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateBackgroundSize);
  });
  </script>
  
  <style lang='scss' scoped>
  p {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 44px;
  }
  
  .text_gradient {
    background: linear-gradient(90deg, rgba(33, 231, 134, 1) 0%, rgba(34, 54, 219, 1) 100%);
    display: inline;
    background-clip: text;
    background-repeat: no-repeat;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.1);
    -webkit-background-clip: text;
  }
  </style>
  