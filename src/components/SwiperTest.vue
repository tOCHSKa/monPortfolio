<template>
  <div>
    <swiper
      :modules="modules"
      :slidesPerView="3"
      :centeredSlides="true"
      :spaceBetween="30"
      :pagination="{
        type: 'fraction',
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="false"
      :virtual="true"
      class="mySwiper"
      @swiper="setSwiperRef"
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        :key="index"
        :virtualIndex="index"
      >
        {{ slideContent }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, nextTick, onMounted } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

// Import Swiper core and required modules
import { Autoplay, Pagination, Navigation, Virtual } from 'swiper/modules';

const slides = ref(Array.from({ length: 8 }).map((_, index) => `Slide ${index + 1}`));
let swiperRef = null;

const setSwiperRef = (swiper) => {
  swiperRef = swiper;
};

onMounted(async () => {
  await nextTick();
  if (swiperRef) swiperRef.autoplay.start();
});

const modules = [Autoplay, Pagination, Navigation, Virtual];
</script>
