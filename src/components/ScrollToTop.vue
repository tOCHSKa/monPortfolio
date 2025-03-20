<template>
    <div class="scrollToTop" v-if="isVisible">
      <div class="arrow">
            <a @click.prevent="scrollToSection('top')"
            @keydown.enter.prevent="scrollToSection('top')"
             class="arrow-pos" aria-label="top">
              <Icon icon="solar:alt-arrow-up-line-duotone"
              width="30" height="30"  style="color: #fff" />
            </a>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

const isVisible = ref(false);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  isVisible.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
<style lang="scss" scoped>

.scrollToTop {
    position: fixed;
    bottom: 70px;
    right: 20px;
    border: 1px solid var(--bgPink);
    border-radius: 5px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2200;
    transition: all 0.3s ease;

    .arrow {
        position: absolute;
        top: 10%;
        background-color: #21E786;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

  }
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 1025px) {
    .scrollToTop {
        display: none;
    }
  }
.scrollToTop:hover {
  transform: translateY(-5PX);
}
</style>
