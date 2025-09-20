<script setup>
import Navbar from './components/Navbar.vue'
import ScrollToTopBtn from "./components/ScrollToTopBtn.vue";
import FixedBtn from './components/FixedBtn.vue';
import Footer from './components/Footer.vue';

</script>
<template>
  <Html data-theme="custom">
  <Body class=" text-white min-h-screen">
    <Navbar />
    <NuxtPage />
    <FixedBtn />
    <ScrollToTopBtn />
    <Footer />
  </Body>
  </Html>
</template>
