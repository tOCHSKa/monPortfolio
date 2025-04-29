<template>
  <div class="w-full h-full relative">
    <div class="absolute w-full h-full top-0 left-0 bg opacity-[0.8]">
    </div>
    <div class="mb-[110px] text-center max-w-[930px] mx-auto pt-[60px] relative">
      <h2 data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
      class="text-[44px] leading-[56px] bakbak text-white uppercase">PROJECTS</h2>
    </div>
    <div
    class="project-grid"
    :style="{ gridTemplateColumns: gridColumns }"
    >
      <div
        class="project relative"
        v-for="(project, index) in projects"
        :key="index"
        data-aos="flip-right"
        data-aos-duration="3000"
        :data-aos-delay="index * 200"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="project-wrap">
          <div class="project-img" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div class="project-text">
            <h3>{{ project.title }}</h3>
            <p class="project-paragraph">{{ project.description }}</p>
          </div>
        </div>
        <div class="absolute top-[92%] left-[4%] text-white flex items-center gap-1">
          <div v-if="project.github">
            <a :href="project.github" aria-label="Lien du dépo" target="_blank">
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
          </div>
          <div v-if="project.url">
            <a :href="project.url" aria-label="Lien du site" target="_blank">
              <Icon icon="tabler:world" width="24" height="24" />
            </a>
          </div>
          <div v-if="project.youtube">
            <a :href="project.youtube" aria-label="Lien de la vidéo" target="_blank">
              <Icon icon="si:youtube-line" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref,onMounted } from 'vue';
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/vue";

onMounted(() => {
  AOS.init();
});

// Valeur par défaut
const defaultGrid = "1fr 1fr 1fr";
const gridColumns = ref(defaultGrid);

// Exemple de données pour les projets
const projects = ref([
  { title: "CHILL VoD",
    github: "https://github.com/tOCHSKa/chillFront",
    image: "https://i.imgur.com/zfCSYlG.png",
    description: `Plateforme de streaming vidéo fictive développée avec Nuxt.js pour la partie frontend, Express.js pour l'API backend et RapidAPI pour l'intégration de contenus dynamiques.
                  Ce projet simule le fonctionnement d'un service de VoD moderne avec une interface fluide, une navigation intuitive et une gestion sécurisée des contenus multimédias.
                  L'objectif principal était de reproduire une expérience utilisateur similaire aux grandes plateformes, tout en assurant une performance optimale côté client et serveur.
                  Ce projet m'a permis de renforcer mes compétences en développement, en gestion d'API tierces et en structuration d'applications Nuxt.`},
  { title: "Macker prod",
    github: "https://github.com/tOCHSKa/mackerStage",
    url: "https://www.mackerprod.com",
    youtube: "https://www.youtube.com/@MackerPROD",
    image: "https://i.imgur.com/UIqq3JH.png",
    description: `Macker Prod est un site portfolio professionnel dédié à la mise en valeur du travail d'un vidéaste et photographe.
                  Développé avec Vue.js 3 pour la partie frontend et Express.js pour l'API, ce projet met en avant une galerie dynamique, un affichage optimisé des médias, ainsi qu'une expérience utilisateur fluide sur desktop et mobile.
                  L'accent a été mis sur la performance, la qualité visuelle, ainsi que sur la simplicité de navigation afin de mettre les réalisations du créateur au premier plan.
                  Ce projet m'a permis de travailler sur l'optimisation d'images, l'expérience utilisateur (UX) et le déploiement d'applications modernes.`},
  { title: "Pixel AI Bot",
    github: "https://github.com/tOCHSKa/pixelBot",
    url: "",
    youtube: "https://www.youtube.com/watch?v=Xn9nlPUkJZg&t=9s",
    image: "https://i.imgur.com/Y1SiZEU.png",
    description: `Pixel AI Bot est un projet d'exploration de l'automatisation avec Python, appliqué à World of Warcraft (WoW).
                  L'objectif était de développer un script capable de détecter des éléments à l'écran et d'effectuer des actions automatiques grâce aux librairies PyAutoGUI et MSS.
                  Ce projet m'a initié aux techniques de capture d'écran en temps réel, d'analyse pixel par pixel et d'automatisation de tâches dans un environnement graphique.
                  Il m'a également permis de découvrir les bonnes pratiques liées à l'automatisation, à la détection d'événements visuels et à l'interaction avec des interfaces utilisateurs complexes.`},
]);

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
  border: 1px solid rgba(33, 231, 134, 0.5);
  box-shadow: rgba(33, 231, 134, 0.1) 0px 0px 1rem 1rem;
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
  border: 1px solid rgba(33, 231, 134, 0.5);
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
