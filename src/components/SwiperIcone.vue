<template>
<div class="mx-auto h-full overflow-hidden media">
    <div class="mx-auto overflow-hidden">
        <div class="swiper-container overflow-hidden">
            <swiper
            :modules="modules"
            :breakpoints="{
                640: { slidesPerView: 1, spaceBetween: 0 },
                1024: { slidesPerView: 5, spaceBetween: 0 }
              }"
            :centeredSlides="true"
            :pagination="{
                type: 'dynamic',
            }"
            :loop="true"
            :direction="'horizontal'"
            :grabCursor="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :speed="2000"
            :navigation="false"
            :virtual="false"
            class="mySwipe"
            @swiper="setSwiperRef"
            >
                <swiper-slide
                v-for="(image, index) in images"
                :key="index"
                :virtualIndex="index"
                class="custom-slide bg-white"
                >
                    <div class="shadow bg-[#141b22]">
                        <div class="p-[20px]">
                            <div class="mb-[20px] overflow-hidden">
                                <img :src="image.src" :alt="image.alt"
                                class="w-full" />
                            </div>
                            <h6 class="leading-[28px] text-[#fff] text-left
                            ">
                             {{ image.title }}</h6>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</div>
</template>
<script setup>
/* eslint-disable */
  import { ref, onMounted, onUnmounted , nextTick } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

// Import Swiper core and required modules
import { Autoplay, Pagination, Navigation, Virtual } from 'swiper/modules';

const slides = ref(Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`));
let swiperRef = null;

const setSwiperRef = (swiper) => {
  swiperRef = swiper;
};

onMounted(async () => {
  await nextTick();
  if (swiperRef) swiperRef.autoplay.start();
});

const modules = [Autoplay, Pagination, Navigation, Virtual];

const images = ref([
  { src: 'https://i.imgur.com/DaSY7i4.png', alt: 'Logo Nuxt.js', title: 'Nuxt #' },
  { src: 'https://i.imgur.com/2BNAx1z.png', alt: 'Logo Node.js', title: 'Node.js #' },
  { src: 'https://i.imgur.com/W2JNaUF.png', alt: 'Logo Vue.js', title: 'Vue.js #' },
  { src: 'https://i.imgur.com/q4WIgaE.jpeg', alt: 'Logo TypeScript', title: 'TypeScript #' },
  { src: 'https://i.imgur.com/ZslkrEe.png', alt: 'Logo Express.js', title: 'Express.js #' },
  { src: 'https://i.imgur.com/EqqpPxm.jpeg', alt: 'Logo MySQL', title: 'MySQL #' },
  { src: 'https://i.imgur.com/nNbUqJ7.png', alt: 'Logo FastAPI', title: 'FastAPI #' },
]);

  </script>
  <style lang="scss" scoped>
    
.swiper-container {
    overflow: hidden;
   }
   
   .custom-slide {
    width: 330px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    color: #fff;
    background: transparent;
    transition: all 0.3s ease;
   }
  
   .shadow:hover {
    box-shadow: 0 5px 10px hsla(0,0,100%,0.3);
    transition: all 0.3s ease;
   }
  
   .mySwiper{
    overflow: hidden;
    transition: all 0.3s ease;
   }

  </style>