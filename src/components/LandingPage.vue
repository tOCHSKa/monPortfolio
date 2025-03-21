<template>
    <div class="home">
        <div class="tochtheme show">
            <div class="container">
                <div class="content">
                    <div class="left">
                        <div class="hello">
                            <span class="hello">
                                Hello, World!
                            </span>
                        </div>
                        <div class="title">
                            <h2>I'm
                                <span class="animated-text relative" v-html="displayedText"></span>
                            </h2>
                            <h3>Developper</h3>
                        </div>
                        <div class="subtitle">
                            <p>With 2 years experience</p>
                        </div>
                        <div class="buttons">
                            <a href="https://discord.gg/kqUzqrW8Md"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="discord logo" class="py-[12px]
                            px-[20px] inline-flex items-center tf-button
                            transition-all duration-300 ease close discord border-[2px]">
                                <span>Say Hello</span>
                            </a>
                            <div class="tochbuttonsborder
                            transition-all duration-300 ease">
                                <a href="#" class="anchor text-[#fff]
                                hover:text-white bg-[#21E786] hover:bg-transparent
                                 transition-all duration-300 ease"
                                 aria-label="myworks">My Works</a>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="in">
                            <img src="https://binaboxnextjs.vercel.app/assets/images/slider/slider-8.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const words = ['K<span class="cursor">|</span>', 'Ke<span class="cursor">|</span>',
  'Kev<span class="cursor">|</span>', 'Kevi<span class="cursor">|</span>',
  'Kevin<span class="cursor">|</span>', 'Kevi<span class="cursor">|</span>', 'Kev<span class="cursor">|</span>',
  'Ke<span class="cursor">|</span>', 'K<span class="cursor">|</span>', 'W<span class="cursor">|</span>', 'We<span class="cursor">|</span>', 'Web<span class="cursor">|</span>',
  'We<span class="cursor">|</span>', 'W<span class="cursor">|</span>'];
const displayedText = ref(words[0]);
let index = 0;
let isPaused = false;

const updateText = () => {
  if (isPaused) return;

  index += 1;

  if (words[index] === 'Kevin<span class="cursor">|</span>') {
    displayedText.value = `${words[index]}`;
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      updateText(); // Reprendre après la pause
    }, 2000);
  } else if (words[index] === 'Web<span class="cursor">|</span>') {
    displayedText.value = `${words[index]}`;
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      updateText(); // Reprendre après la pause
    }, 2000);
  } else {
    if (index >= words.length) index = 0; // Réinitialisation
    displayedText.value = words[index];
    setTimeout(updateText, 150);
  }
};

onMounted(() => {
  updateText();
});

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
.home {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
}
.tochtheme {
    width: 100%;
    clear: both;
    float: left;
    opacity: 0;
}

.container {
    max-width: 1440px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding: 0px 20px;
    position: relative;
    clear: both;
    padding-top: 150px;
}

.content {
    width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
    width: 50%;
}

.hello {
    width: 100%;
    float: left;
    position: relative;
    margin-bottom: 6px;
}

.hello span {
    font-family: "Bakbak One", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 20px;
    line-height: 26px;
}

@keyframes fadeOut {
    0%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes slider {
    0%{
        left: 28%;
    }
    100% {
        left: 75%;
    }
}

@keyframes opacityFade {
    0% {
        color: #21E786;
    }
    100% {
        color: rgba(33, 231, 134, 0);
    }
}
.title {
    width: 100%;
    float: left;
    margin-bottom: 20px;

  h2 {
    font-family: "Bakbak One", sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 500;
    line-height: 115px;
    color: #fff;
    position: relative;
    .animated-text {
        display: inline-block;
        color: #21E786;
        transition: opacity 0.2s ease-in-out;
        animation-delay: 0.8s;
    }
    .slider {
        font-size: 100px;
        color: #fff;
        font-weight: 100;
        font-family: "Poppins", sans-serif;
        transform: translateY(-50%);
        top: 50%;
        left: 28%;
        position: absolute;
        animation: fadeOut 0.5s ease-in-out infinite, slider 1s ease infinite alternate;
    }
  }

  h3 {
    color: #fff;
    font-family: "Bakbak One", sans-serif;
    font-size: 80px;
    font-weight: 500;
    line-height: 88px;
  }
}

.subtitle {
    width: 100%;
    float: left;
    margin-bottom: 40px;
    p {
        color: #fff;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: "Poppins", sans-serif;
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
    }
}

.buttons {
    width: 100%;
    float: left;
    display: flex;
    gap: 30px;

  .tochbuttons {
    width: auto;
    a {
        font-size: 15px;
        font-weight: 400;
        display: inline-block;
        padding: 16px 30px;
        font-family: "Bakbak One", sans-serif;
        text-transform: uppercase;
    }
  }
}

.tochbuttonsborder {
    width: auto;
    margin-left: 15px;
    height: auto;
    a {
        text-align: center;
        font-size: 15px;
        font-weight: 400;
        display: inline-block;
        padding: 15px 30px;
        border: 2px solid #21E786;
        font-family: "Bakbak One", sans-serif;
        text-transform: uppercase;
        &:hover {
            color: #fff;
        }
    }
}

.in {
    display: inline-block;
    position: relative;
    float: right;
    animation: slideIn 4s ease infinite alternate;
    animation-fill-mode: forwards;
    img {
        height: 100%;
        width: 100%;
        border-radius: 16px;
    }
}

.close {
    --hover: #21E786;
    font-family: "Bakbak One", sans-serif;
    font-weight: 400;
    font-size: 15px;
    padding: 15px 30px;
    text-transform: uppercase;
    color: #21E786;
    border: 2px solid #21E786;
}

.close:hover,
.close:focus {
    box-shadow: inset -5em 0 0 0 var(--hover), inset 5em 0 0 0 var(--hover);
}

.close:hover,
.close:focus {
    color: #fff;
    border: 2px solid #21E786;
}

@media (max-width: 1000px) {
    .right {
        display: none;
    }
    .left {
        width: 100%;
    }
}
@media (max-width: 370px) {
    .buttons .tochbuttonsborder a, .buttons .tochbuttons a{
        padding: 15px 25px;
    }
}
.btn {
    box-sizing: border-box;
    appearance: none;
    background-color: #21E786;
    border: 2px solid red;
    color: red;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-weight: 400;
    padding: 15px 30px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: "Bakbak One", sans-serif;
    font-weight: 700;

    &:hover,
    &:focus {
      color: #fff;
      outline: 0;
    }
  }
  .fifth {
    border-color: #21E786;
    // border: 0;
    border-radius: 0;
    color: #141b22;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;

    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 100%;
      background: #141b22ff;
      z-index: -1;
      transition: width 150ms ease-in-out;
    }

    &:hover {
      color: #fff;
      &:after {
        width: 100%;
      }
    }
  }

  @keyframes show {
    0% {
        opacity: 0;
        visibility: hidden;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
}

.show {
    animation: show 1s ease;
    animation-delay: 3.1s;
    animation-fill-mode: forwards;
}

@keyframes slideIn {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(40px);
    }
}
@media (max-width: 1000px) {
  .content {
    padding-top: 150px;
  }
}

@media (max-width:600px) {
  .title {
    h2 {
      font-size: 70px;
    }
    h3 {
      font-size: 50px;
    }
  }
  .subtitle {
    p {
      font-size: 20px;
    }
  }
}
</style>
<style>
@keyframes show {
  0% {
      opacity: 0;
      visibility: hidden;
  }
  100% {
      opacity: 1;
      visibility: visible;
  }
}

.cursor {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    color: #fff;
    position: absolute;
    transform: translateY(0px);
    top: -5px;
    animation: show 2s ease infinite;
}
</style>
