<script>
  import Header from './views/Header.vue';
  import Footer from './views/Footer.vue';

  export default{
    name:'App',
    components: {Header, Footer},
    setup(){

    },
  }
</script>

<template>
    <Header />
    <router-view />
    <Footer />
</template>

<style scoped></style>
