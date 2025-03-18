<template>
    <div class="sticky top-0 z-30">
        <div class="bg-[#040b11] navbar top-0 text-white relative z-10 shadow-lg">
            <div class="max-w-[1440px] bg-[#040b11] mr-auto ml-auto
            pr-[15px] pr-[15px] flex items-center justify-between flex-row">
            <div class="text-white mr-[30px] w-[200px] cursor-pointer">
                <img src="../assets/logoCV.png" class="" alt="">
            </div>
            <div class="flex">
                <ul class="flex flex-row text-white items-center justify-center poppins navbar-ul">
                    <li class="py-[42px] pr-[36px] pl-0">
                        <a href="#" @click.prevent="scrollToSection('about')">ABOUT</a>
                    </li>
                    <li class="py-[42px] pr-[36px] pl-0">
                        <a href="#" @click.prevent="scrollToSection('roadmap')">ROAD MAP</a>
                    </li>
                    <li class="py-[42px] pr-[36px]">
                        <a href="#" @click.prevent="scrollToSection('portfolio')">PORTFOLIO</a>
                    </li>
                    <li class="py-[42px] pr-[36px] pl-0">
                        <a href="#" @click.prevent="scrollToSection('contact')">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div class="flex gap-5 poppins">
                <a href="#" aria-label="Toggle Theme" class="w-[48px] h-[48px] flex
                items-center justify-center bg-[#141b22] rounded-[50%]">
                <img src="https://binaboxnextjs.vercel.app/assets/images/icon/sun.png" alt="">
                </a>
                <a href="https://discord.gg/kqUzqrW8Md"
                target="_blank" rel="noopener noreferrer"
                aria-label="discord logo" class="py-[12px]
                px-[20px] bg-[#141b22] inline-flex items-center tf-button
                transition-all duration-300 ease close discord">
                <box-icon type='logo'
                name='discord-alt' color="white" class="mr-[10px]"></box-icon>
                <span>DISCORD</span>
            </a>
            <a href="https://github.com/tOCHSKa"
            target="_blank" rel="noopener noreferrer"
            aria-label="discord logo" class="py-[12px]
            px-[24px] bg-[#21E786] hover:bg-[#141b22]
            border-[2px] border-[#21E786]
            inline-flex items-center github
            transition-all duration-300 ease">
            <box-icon type='logo' name='github' color="white" class="mr-[10px]"></box-icon>
            <span>GITHUB</span>
        </a>
        <div class="flex items-center justify-center burger cursor-pointer
        transition-all duration-300 ease"
        @click="toggleIsClicked" @keydown="toggleIsClicked" tabindex="0">
        <Icon v-if="!isClicked"
        icon="ic:round-menu"
        width="36" height="36" style="color: #fff" />
        <Icon v-else
        icon="akar-icons:cross" width="36" height="36" style="color: #fff" />
    </div>
</div>
</div>
<div class="navslide absolute bg-[#141b22] w-full
        transition-all duration-300 ease"
        :class="{ active: isClicked }">
            <div v-for="(item, index) in menuItems" :key="index"
            class="flex items-center justify-between cursor-pointer
            p-3 border-b border-white/30 hover:text-[#21E786]"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
            @focus="hoveredIndex = index"
            @blur="hoveredIndex = index"
            @click.prevent="scrollToSection(item.url)"
            @keydown="scrollToSection(item.url)"
            >
            <a @click.prevent="scrollToSection(item.url)"
            @keydown="scrollToSection(item.url)"
            class="text-white poppins hover:text-[#21E786]">{{ item.name }}</a>
            <Icon :icon="item.icon"
            width="20" height="20"
            class="spin cursor-pointer"
            :class="{ 'rotate-360': hoveredIndex === index }"
            />
        </div>
    </div>
</div>
</div>

</template>
<script setup>

import 'boxicons';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const isClicked = ref(false);

const toggleIsClicked = () => {
  isClicked.value = !isClicked.value;
};

const hoveredIndex = ref(null);

const menuItems = ref([
  { name: 'ABOUT', icon: 'solar:arrow-right-linear', url: 'about' },
  { name: 'ROAD MAP', icon: 'solar:arrow-right-linear', url: 'roadmap' },
  { name: 'PORTFOLIO', icon: 'solar:arrow-right-linear', url: 'portfolio' },
  { name: 'CONTACT', icon: 'solar:arrow-right-linear', url: 'contact' },
]);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.poppins {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 24px;
}

ul>li>a {
    position: relative;
    color: #fff;
    text-decoration: none;
}

ul>li>a:hover {
    color: #21E786;
}

ul>li>a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #21E786;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

ul>li>a:hover::before {
    transform: scaleX(1);
}

.close {
    --hover: #21E786;
}

.close:hover,
.close:focus {
    box-shadow: inset -5em 0 0 0 var(--hover), inset 5em 0 0 0 var(--hover);
}

.close:hover,
.close:focus {
    color: #fff;
}

.close {
    font: inherit;
}

.burger {
    display: none;
}

@media (max-width: 1160px) {
    .github {
        display: none;
    }
}

@media (max-width: 980px) {
    .discord {
        display: none;
    }
}

@media (max-width: 860px) {
    .navbar-ul{
        display: none;
    }

    .burger {
        display: block;
        margin: auto;
    }
}

.navslide {
    top: 100%;
    left: -100%;
}

.navslide.active {
    left: 0%;
}
.spin{
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }

  .rotate-360 {
    transform: rotate(360deg);
    transition: transform 0.3s ease-in-out;
  }

  @keyframes navBarShow {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0%);
    }
}

.navbar {
    transform: translateY(-100%);
    animation: navBarShow 0.3s ease;
    animation-delay: 3s;
    animation-fill-mode: forwards;
}
</style>
