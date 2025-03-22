<template>
    <div class="mx-auto pt-[140px] pb-[145px]">
        <div class='container'>
            <div class='about_inner'>
                <div class='experience'>
                    <div class='in'>
                        <div class='inside'>
                            <h3 class="">
                                <span class='tm_counter rotate'>3</span>
                            </h3>
                            <h6>Années<br>Experience</h6>
                        </div>
                    </div>
                </div>
                <div class='text'>
                    <p>Avec
                        <span class='text_gradient'
                    :style='{ backgroundSize: `${bgSize}% 100%` }'>
                    trois ans de </span>développement , Je
                    <span class='text_gradient'
                    :style='{ backgroundSize: `${bgSize1}% 100%` }'
                    >transforme des projets</span>
                    en utilisant ma
                    <span class='text_gradient'
                    :style='{ backgroundSize: `${bgSize2}% 100%` }'
                    >creativité.</span>
                    </p>
                    <div class='button_border'>
                        <a href='img/cv/1.jpg' download=''>Télécharger CV</a>
                    </div>
                </div>
            <!-- <div class='counter'>
                <div class='list'>
                    <ul>
                        <li>
                            <div class='list_inner'>
                                <h3><span class='tm_counter '>14</span></h3>
                                <span class='title'>Projet terminé</span>
                            </div>
                        </li>
                        <li>
                            <div class='list_inner'>
                                <h3><span class='tm_counter '>1.2</span>k</h3>
                                <span class='title'>Worldwide client</span>
                            </div>
                        </li>
                        <li>
                            <div class='list_inner'>
                                <h3><span class='tm_counter '>3.5</span>k</h3>
                                <span class='title'>Job done</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>
<script setup>
/* eslint-disable */
import { ref, onMounted, onUnmounted } from 'vue';

  const bgSize = ref(0); // Taille initiale du background
  const bgSize1 = ref(10); // Initialiser à 10% pour éviter les valeurs négatives
  const bgSize2 = ref(20); // Initialiser à 20% pour éviter les valeurs négatives
  const lastScrollTop = ref(0); // Stocke la dernière position du scroll
  
  const MIN_BG_SIZE = 0; // Taille minimale du fond (0%)
  const MAX_BG_SIZE = 100; // Taille maximale du fond (100%)
  
  const updateBackgroundSize = () => {
    const currentScroll = window.scrollY;
  
    if (currentScroll > lastScrollTop.value) {
      // Augmente la taille
      bgSize.value = Math.min(MAX_BG_SIZE, bgSize.value + 4);
      bgSize1.value = Math.min(MAX_BG_SIZE, bgSize1.value + 3);
      bgSize2.value = Math.min(MAX_BG_SIZE, bgSize2.value + 2);
    } else if (currentScroll < lastScrollTop.value) {
      // Diminue la taille
      bgSize.value = Math.max(MIN_BG_SIZE, bgSize.value - 4);
      bgSize1.value = Math.max(MIN_BG_SIZE, bgSize1.value - 4);
      bgSize2.value = Math.max(MIN_BG_SIZE, bgSize2.value - 4);
    }
  
    lastScrollTop.value = currentScroll; // Met à jour la position du scroll
  };
  
  onMounted(() => {
    window.addEventListener('scroll', updateBackgroundSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateBackgroundSize);
  });
</script>
<style lang='scss' scoped>
  .container {
    max-width: 1210px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding: 0px 20px;
    position: relative;
    clear: both;
  }
  .about_inner {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .experience {
    width: 50%;
  }
  .in {
    filter: drop-shadow(-3px 7px 0px #fff);
  }

  .inside {
    width: 280px;
  height: 420px;
  clip-path: ellipse(50% 50% at 50% 50%);
  background: linear-gradient(90deg, rgb(33, 231, 134) 0%, rgb(34, 54, 219) 100%);
  transform: rotate(-15deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    transform: rotate(15deg);
  }
  h6 {
    transform: rotate(15deg);
  }
  }

  h3 {
  font-size: 120px;
  color: #fff;
  line-height: 124px;
  margin-left: 40px;
  
  }
  h6 {

  font-size: 20px;
  color: #fff;
}

.text {
    width: 50%;
  padding: 0px 30px;
}

p {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 44px;
  }
  
  .text_gradient {
    background: linear-gradient(90deg, rgba(33, 231, 134, 1) 0%, rgba(34, 54, 219, 1) 100%);
    display: inline;
    background-clip: text;
    background-repeat: no-repeat;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
    -webkit-background-clip: text;
  }

  .button_border {
    width: 100%;
    height: auto;
    clear: both;
    float: left;

  a {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    background-color: #21E786;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 15px;
  font-weight: 600;
  display: inline-block;
  padding: 15px 40px;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
  text-decoration: none;
  margin-top: 20px;
  }
  }
  .counter {
    width: 20%;
    color: #fff;
    padding-left: 50px;
    ul {
     margin: 0px;
    padding: 0px;
    li {
        margin: 0px 0px 40px 0px;
        width: 100%;
        float: left;
    }
    }
    h3 {
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 44px;
        font-style: normal;
        font-weight: 700;
        line-height: 54px;
        margin-bottom: 8px;
    }
  }

  .list_inner {
    .title {
        margin-left: 40px;
    }
  }

  @media (max-width: 1025px) {
    .container {
        max-width: 1210px;
        width: 100%;
        height: auto;
        padding: 0px 20px;
        position: relative;
        background-color: #040B11;

      }
      .about_inner {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .experience {
        width: 100%;
      }
      .text {
        width: 100%;
        padding: 60px 30px;
        margin: 0 auto;
    }
    .inside {
        width: 100%;
        clip-path: none;
        transform: rotate(-0);
      background: linear-gradient(90deg, rgb(33, 231, 134) 0%, rgb(34, 54, 219) 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      h3 {
        transform: rotate(0);
        margin-left: 0;
      }
      h6 {
        transform: rotate(0);
      }
      }
      .in {
        filter: none;
      }

      p {
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
      }
      
      .text_gradient {
        background: linear-gradient(90deg, rgba(33, 231, 134, 1) 0%, rgba(34, 54, 219, 1) 100%);
        display: inline;
        background-clip: text;
        background-repeat: no-repeat;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.2);
        -webkit-background-clip: text;
      }
      .button_border{
            margin-top: 30px;
      }
    }
</style>
