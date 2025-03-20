<template>
  <div id="top"></div>
  <LoadingComponent />
  <section id="home" class="overflow-hidden">
    <div :style="backgroundStyle">
      <NavCv />
      <LandingPage />
    </div>
  </section>
  <SectionDivider/>
  <section id="about" class="h-[100vh] w-full bg-[#040B11] pt-[59px] pb-[71px]">
    <AboutPage />
  </section>
  <section id="roadmap" class="h-[100vh] w-full bg-[#040B11]">
  </section>
  <section id="portfolio" class="h-[100vh] w-full bg-[#040B11]">
  </section>
  <section id="contact" class="h-[100vh] w-full bg-[#040B11]">
  </section>
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

const backgroundStyle = {
  backgroundImage: `url(${mainBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
};

</script>

<style scoped>
</style>
