<template>
    <div class="relative mr-auto ml-auto pr-[15px] pl-[15px] max-w-[1440px] overflow-hidden">
        <div>
            <div class="max-w-full">
                <div class="absolute top-[24%] right-[12%] left-auto" v-html="star1"></div>
                <div class="absolute top-[0%] left-[5%] z-0" v-html="star2"></div>
                <div class="mb-[50px] max-w-[930px] my-0 mx-auto mt-[50px]
                z-10 relative text-center">
                    <h2 class="text-[44px] leading-[56px]
                    bakbak text-white mb-[30px] uppercase">à PROPOS</h2>
                    <p class="text-[18px] leading-[28px] text-[#c2c3c5] poppins">
                        {{ textAbout }}
                    </p>
                </div>
                <div class="flex justify-center wrapped max-w-[1440px] z-10 mt-[30px]">
                    <div v-for="(item, index) in aboutSkill" :key="index">
                        <div class=" w-[322px] pr-[15px] pl-[15px] cursor-pointer"
                         :class="item.index"
                         @mouseenter="toggleOpacity(item)"
                         @focus="toggleOpacity(item)">
                            <div class="bg-[#141b22] text-center mb-[30px] relative shadow-none
                            pt-[76px] pr-[30px] pb-[30px] pl-[30px] box shadow">
                            <div class="relative mb-[18px]">
                                <div class="absolute top-[-65px] left-[50%] bakbak
                                text-[#21e786] opacity-[0.3] translate-x-[-50%] text-[80px]"
                                :class="item.index">
                                {{ item.number}}</div>
                                <h3 class="relative bakbak text-[24px] text-[#fff]
                                uppercase">{{ item.name }}</h3>
                            </div>
                            <p class="poppins text-[18px] leading-[28px] text-[#c2c3c5]">
                                {{item.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const star1 = '<svg width="208" height="208" viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_2337_5328)"><path d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z" fill="url(#paint0_linear_2337_5328)"></path></g><defs><filter id="filter0_f_2337_5328" x="0" y="0" width="208" height="208" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2337_5328"></feGaussianBlur></filter><linearGradient id="paint0_linear_2337_5328" x1="196" y1="104" x2="12" y2="104" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d2328"></stop><stop offset="1" stop-color="#1d2328" stop-opacity="0"></stop></linearGradient></defs></svg>';
const star2 = '<svg width="302" height="302" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_2337_5282)"><path d="M234.678 38.4808L198.329 110.138L274.714 85.1672L289.589 130.668L213.203 155.638L284.86 191.988L263.205 234.677L191.548 198.328L216.518 274.713L171.018 289.588L146.047 213.202L109.698 284.859L67.0084 263.204L103.358 191.547L26.9721 216.517L12.0979 171.017L88.4837 146.046L16.8268 109.697L38.4818 67.0074L110.139 103.357L85.1682 26.9711L130.669 12.0969L155.639 88.4827L191.989 16.8258L234.678 38.4808Z" fill="url(#paint0_linear_2337_5282)"></path></g><defs><filter id="filter0_f_2337_5282" x="0.0976562" y="0.0966797" width="301.49" height="301.491" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_2337_5282"></feGaussianBlur></filter><linearGradient id="paint0_linear_2337_5282" x1="27.6543" y1="88.352" x2="274.032" y2="213.333" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d2328"></stop><stop offset="1" stop-color="#1d2328" stop-opacity="0"></stop></linearGradient></defs></svg>';
const textAbout = 'Avec plusieurs années d’expérience en développement web, j’ai affiné mon expertise pour concevoir des solutions performantes et innovantes. Mon objectif ? Transformer chaque idée en un projet concret, fonctionnel et impactant.';
const aboutSkill = ref([
  {
    name: 'EXPERTISE',
    number: '01',
    text: 'Fort d’une solide expérience, je maîtrise les technologies modernes (Vue.js, Express...) et je veille à proposer des solutions performantes et optimisées.',
    index: 'index1',
  },
  {
    name: 'METHODIQUE',
    number: '02',
    text: 'De la conception à la mise en production, je travaille avec une méthodologie agile pour livrer des projets de qualité, adaptés aux besoins des utilisateurs.',
    index: 'index2',
  },
  {
    name: 'INNOVANT',
    number: '03',
    text: 'Je ne me contente pas de suivre les tendances, je les anticipe. Toujours en veille, j’explore de nouvelles technologies et conçois des solutions tournées vers l’avenir.',
    index: 'index3',
  },
  {
    name: 'CREATIF',
    number: '04',
    text: 'Au-delà du code, j’ai un sens du détail et de l’esthétique qui me permet de concevoir des interfaces intuitives, modernes et agréables à utiliser.',
    index: 'index4',
  },
]);

const toggleOpacity = ({ index }) => {
  const id1 = document.querySelector(`.${index}`);

  if (!id1) return; // Vérifier que l'élément existe

  id1.addEventListener('mouseover', () => {
    id1.children[0].children[0].children[0].classList.add('opacity-100');
  });
  id1.addEventListener('mouseleave', () => {
    id1.children[0].children[0].children[0]?.classList.remove('opacity-100');
  }, { once: true });
};

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');

.bakbak {
    font-family: "Bakbak One", sans-serif;
    font-weight: 400;
}

.poppins {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

.wrapped {
    margin: 0 auto;
    flex-wrap: wrap;
}
.box{
    transition: all 0.3s ease;
}

.box:hover {
    -webkit-box-shadow: -1px 6px 13px 5px rgba(247,246,255,0.29);
    box-shadow: -1px 6px 13px 5px rgba(247,246,255,0.29);
}

.opacity-100 {
    transition: all 0.3s ease;
}

.shadow {
    box-shadow: 0 10px 25px rgba(71,92,133,.1);
}
</style>
