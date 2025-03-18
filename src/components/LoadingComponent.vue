<template>
    <div class="absolute top-0 left-0 w-full h-full z-20 flex animated-show overflow-hidden">
        <div class="bg-[#000] w-full h-full animated-width-left "></div>
        <div class="bg-[#000] w-full h-full animated-width-right "></div>
        <div class="absolute h-[50px] w-[1px] border-[1px]
        border-[#21E786] top-[50%] left-[50%] transform-translate animated-line"></div>
    </div>
  </template>
<style lang="scss" scoped>

@keyframes show {
    0% {
        opacity: 1;
        visibility: visible;
        z-index: 30;
    }
    100% {
        opacity: 0;
        visibility: hidden;
        z-index: 0
    }
}

.animated-show {
    animation: show 1s ease;
    animation-delay: 3.8s;
    animation-fill-mode: forwards;
}

@keyframes growHeight {
    0% {
        height: 50px;
        transform: translateY(-50%);
    }
    30% {
        height: 300px;
        transform: translateY(-50%);
    }
    90% {
        height: 100%;
        transform: translateY(-50%);
    }
    100% {
        opacity: 0;
    }
}
@keyframes growWidth-left {
    0% {
      transform: translateX(-0);
    }
    100% {
        transform: translateX(-100%);
    }
  }

.animated-width-left {
    animation: growWidth-left 1s ease;
    animation-delay: 2s;
    animation-fill-mode: forwards;
}
@keyframes growWidth-right {
    0% {
      transform: translateX(-0);
    }
    100% {
        transform: translateX(100%);
    }
  }

.animated-width-right {
    animation: growWidth-right 1s ease;
    animation-delay: 2s;
    animation-fill-mode: forwards;
}

.animated-line {
    animation: growHeight 2s ease-in-out forwards;
    transform-origin: center;
}

.transform-translate {
    transform: translate(-50%, -50%);
}
</style>
