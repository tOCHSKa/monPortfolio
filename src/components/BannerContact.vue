<template>
    <section class="tf-page-title relative">
      <div class="absolute w-full h-full top-0 left-0 bg opacity-[0.8]">
      </div>
        <div class="tf-container"><div class="row">
            <div class="col-md-12">
                <h2 data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                class="page-title-heading bakbak">CONTACT</h2>
            </div>
        </div>
    </div>
</section>
<section class="pt-[100px] pb-[204px]">
  <div class="relative mx-auto px-[15px] max-w-[1440px]">
    <div class="">
      <div class="">
        <div class="ml-[-30px] mb-[40px] flex-wrap flex">
          <div class="ml-[30px] text-center py-[40px] custom-width
           px-0 relative bg-transparent border-[1px] border-[#434343]">
            <div class="mb-[20px] text-center flex justify-center">
              <img src="../assets/loaction.svg" alt="" class="h-auto max-w-full align-middle">
            </div>
            <h3 class="mb-[6px] text-[#fff] text-[36px] leading-[44px] bakbak">Location</h3>
            <p class="text-[18px] leading-[28px] text-[#c2c3c5]">163 Bd Carnot, Mouvaux 59420</p>
          </div>
          <div class="ml-[30px] text-center py-[40px] custom-width
           px-0 relative bg-transparent border-[1px] border-[#434343]">
            <div class="mb-[20px] text-center flex justify-center">
              <img src="../assets/email.svg" alt="" class="h-auto max-w-full align-middle">
            </div>
            <h3 class="mb-[6px] text-[#fff] text-[36px] leading-[44px] bakbak">Email</h3>
            <p class="text-[18px] leading-[28px] text-[#c2c3c5]">ysocomus59200@hotmail.com</p>
          </div>
          <div class="ml-[30px] text-center py-[40px] custom-width
           px-0 relative bg-transparent border-[1px] border-[#434343]">
            <div class="mb-[20px] text-center flex justify-center">
              <img src="../assets/phone.svg" alt="" class="h-auto max-w-full align-middle">
            </div>
            <h3 class="mb-[6px] text-[#fff] text-[36px] leading-[44px] bakbak">Phone</h3>
            <p class="text-[18px] leading-[28px] text-[#c2c3c5]">+33 6 95 59 39 96</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center  text-[#fff] mb-[59px]">
    <h2 class="leading-[56px] bakbak text-[44px] mb-[6px]">Contactez-moi</h2>
    <p class="leading-[30px] text-[20px] text-[#c2c3c5] poppins">
      Posez vos questions précises, et je prendrai le temps d'y répondre.</p>
  </div>
  <div class=" max-w-3xl mx-auto text-white poppins padding-media">
    <div class="flex gap-3 media">
      <div class="custom-width-input">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="name" class="block text-sm mb-1 hidden">Nom</label>
        <input id="name" v-model="form.name"
        class="w-full p-5 bg-gray-800  text-white
         focus:outline-none focus:ring-2 focus:ring-[#21E786]"
         placeholder="Votre nom" />
        <p v-if="errors.name" class="text-[#21E786] text-xs mt-1">{{ errors.name }}</p>
      </div>
      <div class="w-full">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label for="email" class="block text-sm mb-1  hidden">Email</label>
        <input id="email" v-model="form.email"
         type="email" class="w-full p-5 bg-gray-800
         text-white focus:outline-none focus:ring-2 focus:ring-[#21E786]"
          placeholder="Votre email" />
        <p v-if="errors.email" class="text-[#21E786] text-xs mt-1">{{ errors.email }}</p>
      </div>
    </div>
    <div class="mt-4">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="phone" class="block text-sm mb-1  hidden">Téléphone</label>
      <input id="phone" v-model="form.phone"
      type="tel" class="w-full p-5 bg-gray-800  text-white
       focus:outline-none focus:ring-2 focus:ring-[#21E786]"
       placeholder="Votre numéro de téléphone" />
      <p v-if="errors.phone" class="text-[#21E786] text-xs mt-1">{{ errors.phone }}</p>
    </div>
    <div class="mt-4">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="message" class="block text-sm mb-1  hidden">Message</label>
      <textarea id="message" v-model="form.message"
      class="w-full p-5 bg-gray-800  text-white h-[200px]
      focus:outline-none focus:ring-2 focus:ring-[#21E786]" placeholder="Votre message"></textarea>
      <p v-if="errors.message" class="text-[#21E786] text-xs mt-1">{{ errors.message }}</p>
    </div>
    <button @click="submitForm" class="mt-[60px] bakbak font-bold
     mx-auto bg-transparent border-[3px] close transition-all ease-in
     flex border-[#21E786] p-4 border-solid">
      Envoyer mon message
    </button>
  </div>
</section>
</template>
<script setup>
/* eslint-disable */
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const errors = ref({});

const validateForm = () => {
  errors.value = {};
  if (!form.value.name) errors.value.name = "Le nom est requis";
  if (!form.value.email) errors.value.email = "L'email est requis";
  if (!form.value.phone) errors.value.phone = "Le numéro de téléphone est requis";
  if (!form.value.message) errors.value.message = "Le message est requis";
};

const submitForm = () => {
  validateForm();
  if (Object.keys(errors.value).length === 0) {
    emailjs
    .send("service_y78050q", "template_zjgvled", { 
      ...form.value // Déstructure directement l'objet
    }, "rB9_BY8oMO1V87CS7")
    .then(
      () => {
        console.log("Formulaire envoyé avec succès !");
        alert("Votre message a été envoyé !");
        form.value = { name: "", email: "", phone: "", message: "" }; // Réinitialise le formulaire
      },
      (error) => {
        console.log("Erreur d'envoi :", error.text);
      }
    );
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');

.tf-page-title {
    padding: 50px 0;
    text-align: center;
    background: url('https://i.imgur.com/ahzdRpf.jpeg') no-repeat;
    background-size: 100%;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
  }
  .tf-container, .tf-container-2 {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 100%;
  }
  .tf-container {
    width: 1440px;
  }
  @media (min-width: 1200px) {
    .row {
      margin-right: -15px;
      margin-left: -15px;
    }
  }

  @media (min-width: 768px) {
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  .tf-page-title .page-title-heading {
    color: #fff;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 44px;
    line-height: 56px;
  }

  .tf-page-title .breadcrumbs {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    list-style: disc;
      list-style-position: outside;
      list-style-image: none;
      list-style-type: disc;
  }

.tf-page-title .breadcrumbs li {
  font-family: var(--bakbak);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  padding: 0 10px 0 0;
  color: var(--primary-color5);
}

li {
    list-style: none;
  }

  .tf-page-title .breadcrumbs li a {
    font-weight: 700;
    position: relative;
    color: #888b8e;
    padding-right: 11px;
  }
  a, a:focus, a:hover {
    text-decoration: none;
    transition: all .3s ease;
  }

  .tf-page-title .breadcrumbs li a::after {
    content: "";
    position: absolute;
    color: #888b8e;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 2px;
    height: 16px;
    background-color: #888b8e;
  }

  .bakbak {
    font-family: "Bakbak One", sans-serif;
    font-weight: 600;
  }
  .bg {
    background: linear-gradient(180deg, rgba(4, 11, 17, 0.7) 0%, rgba(4, 11, 17, 1) 100%);
    z-index: 0;
  }
  .custom-width {
    width: calc(33.33% - 30px);
  }
  
  @media (max-width: 768px) {
    .custom-width {
      width: 100%;
      margin-bottom: 30px;
    }
  }

  .poppins {
    font-family: "Poppins", sans-serif;
  }

  input, textarea {
    outline: none;
  }

  .close {
    --hover: #21e786;
  }
  
  .close:hover,
  .close:focus {
    box-shadow: inset -7em 0 0 0 var(--hover), inset 7em 0 0 0 var(--hover);
  }
  
  .close:hover,
  .close:focus {
    color: #fff;
  }
  .custom-width-input{
    width: calc(33.333% - 5px);
  }

  @media (max-width: 768px) {
    .media {
      flex-direction: column;
    }
    .custom-width-input {
      width: 100%;
    }
  }

  @media (max-width: 1025px) {
    .padding-media {
      padding: 0 1.1rem;
    }
  }
</style>
