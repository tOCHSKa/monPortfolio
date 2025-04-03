<template>
  <div id="top"></div>
  <LoadingComponent />
  <NavCv />
  <section id="home" class="overflow-hidden">
    <div :style="backgroundStyle" class="home">
      <LandingPage />
    </div>
  </section>
  <div v-if="isLoaded" class="overflow-hidden bg-[#040B11]">
    <SectionDivider />
    <section id="about" class="h-[100%] w-full bg-[#040B11] pt-[59px]">
      <AboutPage />
      <ResumePage />
    </section>
    <section id="project"
     :style="backgroundStyleResume"
    >
      <ProjectPage class="pt-[50px]"/>
    </section>
    <section id="contact" class="h-auto w-full bg-[#040B11]">
      <div class="h-[90px]"></div>
      <BannerContact />
    </section>
  </div>
  <ScrollToTop />
</template>

<script setup>
/* eslint-disable */
import NavCv from "@/components/NavCv.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import mainBackground from "@/assets/mainBackground.jpg";
import LandingPage from "@/components/LandingPage.vue";
import SectionDivider from "@/components/SectionDivider.vue";
// import TestParticles from '@/components/TestParticles.vue';
import ScrollToTop from "@/components/ScrollToTop.vue";
import AboutPage from "@/components/AboutPage.vue";
import { ref } from "vue";
// import TestCo from '@/components/TestCo.vue';
import ResumePage from "@/components/ResumePage.vue";
import ProjectPage from "@/components/ProjectPage.vue";
import BannerContact from "@/components/BannerContact.vue";

const backgroundStyle = {
  backgroundImage: `url(${mainBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
};
const backgroundStyleResume = {
  backgroundImage: `url(${mainBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "auto",
  width: "100vw",
};

const isLoaded = ref(false);

setTimeout(() => {
  isLoaded.value = true;
}, "4000");
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
