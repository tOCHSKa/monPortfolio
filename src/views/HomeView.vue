<template>
  <LoadingComponent />
  <div :style="backgroundStyle">
    <NavCv />
  </div>
</template>

<script setup>
import NavCv from '@/components/NavCv.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import mainBackground from '@/assets/mainBackground.jpg';

const backgroundStyle = {
  backgroundImage: `url(${mainBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  height: '100vh',
  width: '100vw',
};

</script>

<style scoped>
</style>
