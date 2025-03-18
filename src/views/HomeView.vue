<template>
  <LoadingComponent />
  <div :style="backgroundStyle">
    <NavCv />
    <LandingPage />
  </div>
  <SectionDivider/>
  <TestParticles />
</template>

<script setup>
import NavCv from '@/components/NavCv.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import mainBackground from '@/assets/mainBackground.jpg';
import LandingPage from '@/components/LandingPage.vue';
import SectionDivider from '@/components/SectionDivider.vue';
import TestParticles from '@/components/TestParticles.vue';

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
