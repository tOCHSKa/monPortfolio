<template>
    <div class="block">
        <div class="overflow-hidden bg-[#21e786] py-[9px] px-[80px] whitespace-nowrap bakbak
        logo-slider-wrap">
            <div class="inline-block pl-0 logoslider"
            @mouseenter="togglePause(true)"
            @mouseleave="togglePause(false)"
            @focusin="togglePause(true)"
            @focusout="togglePause(false)">
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
            </div>
            <div class="inline-block pl-0 logoslider2">
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
                <h3 class="inline-block text-[#141b22]
                mr-[113px] text-[32px] leading-[42px]">TOCHDEV</h3>
            </div>
        </div>
    </div>
</template>
<script setup>

const togglePause = (isPaused) => {
  const logoslider = document.querySelector('.logoslider');
  const logoslider2 = document.querySelector('.logoslider2');

  if (logoslider && logoslider2) {
    logoslider.style.animationPlayState = isPaused ? 'paused' : 'running';
    logoslider2.style.animationPlayState = isPaused ? 'paused' : 'running';
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');

.bakbak {
    font-family: "Bakbak One", sans-serif;
    font-weight: 400;
}
@keyframes logoslider {
    0% {
      transform:translateX(0)
    }
    to {
      transform:translateX(-100%)
    }
  }
  @keyframes logoslider2 {
    0% {
      transform:translateX(0)
    }
    to {
      transform:translateX(-100%)
    }
  }
.logoslider, .logoslider2 {
    animation: logoslider 80s linear infinite, logoslider2 80s linear infinite;
}

.logoslider:hover, .logoslider2:hover {
    animation-play-state: paused;
}
</style>
