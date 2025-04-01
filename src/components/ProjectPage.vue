<template>
  <div class="w-full h-full relative">
    <div class="absolute w-full h-full top-0 left-0 bg opacity-[0.8]">
    </div>
    <div class="mb-[110px] text-center max-w-[930px] mx-auto pt-[60px] relative">
      <h2 class="text-[44px] leading-[56px] bakbak text-white uppercase">PROJECTS</h2>
    </div>
    <div
    class="project-grid"
    :style="{ gridTemplateColumns: gridColumns }"
    >
      <div
        class="project"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="project-wrap">
          <div class="project-img" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div class="project-text">
            <h3>{{ project.title }}</h3>
            <p class="project-paragraph">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-auto pb-[60px] mt-[60px] max-w-full overflow-hidden media">
      <SwiperIcone class="mt-[30px]" />
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref } from 'vue';
import SwiperIcone from './SwiperIcone.vue';


// Valeur par défaut
const defaultGrid = "1fr 1fr 1fr";
const gridColumns = ref(defaultGrid);

// Exemple de données pour les projets
const projects = ref([
  { title: "CHILL", image: "https://i.imgur.com/zfCSYlG.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo similique, nostrum nesciunt recusandae temporibus voluptates ipsum error. Consequuntur atque ducimus vitae nam reiciendis nulla voluptas corrupti, in consequatur tempore quas"},
  { title: "Macker prod", image: "https://i.imgur.com/UIqq3JH.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo similique, nostrum nesciunt recusandae temporibus voluptates ipsum error. Consequuntur atque ducimus vitae nam reiciendis nulla voluptas corrupti, in consequatur tempore quas"},
  { title: "Title", image: "https://i.imgur.com/zfCSYlG.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo similique, nostrum nesciunt recusandae temporibus voluptates ipsum error. Consequuntur atque ducimus vitae nam reiciendis nulla voluptas corrupti, in consequatur tempore quas"},
]);

// Fonction pour ajuster la grille au survol
const setGridColumns = (index) => {
  const columns = projects.value.map((_, i) => (i === index ? "2fr" : "1fr"));
  gridColumns.value = columns.join(" ");
};

// Réinitialisation au départ du curseur
const resetGridColumns = () => {
  gridColumns.value = defaultGrid;
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap");

.bakbak {
  font-family: "Bakbak One", sans-serif;
  font-weight: 400;
}
.bg {
  background: linear-gradient(180deg, rgba(4, 11, 17, 0.7) 0%, rgba(4, 11, 17, 1) 100%);
  z-index: 0;
}

.project-grid {
    margin: 0 auto;
    display: grid;
    max-width: 1440px;
    padding: 0px 1rem;
    width: 100%;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    font-family: 'Poppins', sans-serif;
    transition: grid-template-columns 0.6s ease-in-out;
}
.project {
  margin: 0px auto;
  border: 1px solid rgba(43, 105, 251, 0.12);
  box-shadow: rgba(33, 231, 134, 0.06) 0px 0px 1rem 1rem;
  position: relative;
}

.project-wrap {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.project-img {
  display: flex;
  width: 100%;
  height: auto;
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  border: 1px solid rgba(33, 231, 134, 0.12);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.project-img, .project-text {
  grid-area: 1 / 1 / -1 / -1;
  position: relative;
}
.project-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 0rem 1rem;
  color: white;
  margin-top: 47%;
  background: #040B11;
  box-shadow: rgb(4, 11, 17) 0px 0px 4rem 6rem;
}

h3 {
  font-size: 1.5rem;
  line-height: 1;
}
.project-paragraph {
  margin-bottom: 3.5rem;
}

.project-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 0px;
  padding: 1rem;
}
a {
  color: white;
  text-decoration: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem; // Réduit l'espace entre les projets pour un meilleur rendu
  }
}

</style>
<path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" stroke-width="2" stroke-dasharray="6 6">
</path>
<circle cx="30" cy="30" r="30" fill="#21E786" class="fill-1" fill-opacity="0.2">
</circle>
<circle cx="30" cy="30" r="15" fill="#21E786" class="fill-2">
</circle>
