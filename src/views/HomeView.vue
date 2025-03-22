<template>
  <div id="top"></div>
  <LoadingComponent />
  <NavCv />
  <section id="home" class="overflow-hidden">
    <div :style="backgroundStyle">
      <LandingPage />
    </div>
  </section>
  <div v-if="isLoaded">
    <SectionDivider/>
    <section id="about" class="h-auto w-full bg-[#040B11] pt-[59px]">
      <AboutPage />
      <ResumePage />
    </section>
    <section id="roadmap" class="h-[100vh] w-full bg-[#fff]">
      <!-- <TestCo /> -->
    </section>
    <section id="portfolio" class="h-[100vh] w-full bg-[#040B11]">
    </section>
    <section id="contact" class="h-[100vh] w-full bg-[#040B11]">
    </section>
  </div>
  <ScrollToTop/>
  <!-- <TestParticles /> -->
</template>

<script setup>
import NavCv from '@/components/NavCv.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import mainBackground from '@/assets/mainBackground.jpg';
import LandingPage from '@/components/LandingPage.vue';
import SectionDivider from '@/components/SectionDivider.vue';
// import TestParticles from '@/components/TestParticles.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import AboutPage from '@/components/AboutPage.vue';
import { ref } from 'vue';
// import TestCo from '@/components/TestCo.vue';
import ResumePage from '@/components/ResumePage.vue';

const backgroundStyle = {
  backgroundImage: `url(${mainBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
};

const isLoaded = ref(false);

setTimeout(() => {
  isLoaded.value = true;
}, '4000');

</script>

<style scoped>
</style>
