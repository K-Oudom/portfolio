<template>
     <header id="header" class="header dark-background d-flex flex-column">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="profile-img">
      <img src="../assets/img/profile/me.png" alt="" class="img-fluid rounded-circle">
    </div>

    <router-link :to="{name:'home'}" class="logo d-flex align-items-center justify-content-center">
         <h1 class="sitename">Alex Smit</h1>
    </router-link>

    <div class="social-links text-center">
      <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bi bi-telegram"></i></a>
      <a href="#" class="linkedin"><i class="bi bi-whatsapp"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li>
            <router-link :to="{name:'home'}" class="active" id="home"><i class="bi bi-house navicon"></i>Home</router-link>
        </li>
        <li>
            <router-link :to="{name:'about'}" id="about"><i class="bi bi-person navicon"></i>About</router-link>
        </li>
        <li>
            <router-link :to="{name:'resume'}" id="resume"><i class="bi bi-file-earmark-text navicon"></i>Resume</router-link>
        </li>
        <li>
            <router-link :to="{name:'portfolio'}" id="portfolio"><i class="bi bi-images navicon"></i>Portfolio</router-link>
        </li>
        <li>
            <router-link :to="{name:'contact'}" id="contact"><i class="bi bi-envelope navicon"></i>Contact</router-link>
        </li>
      </ul>
    </nav>

  </header>
</template>
<script>
  import('@/assets/js/link');
  
  export default {
    setup(){
     
    },
    
  }
</script>
<style scoped>
  ul li a{
    text-decoration:none;
  }
  ul li a.active i{
    color: #149ddd;
  }
  .header > a{
    text-decoration: none;
  }
</style>