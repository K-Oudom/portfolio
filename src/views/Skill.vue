<template>
     <main class="main">
          <!-- Skills Section -->
          <section id="skills" class="skills section light-background">

               <!-- Section Title -->
               <div class="container section-title">
               <h2>Skills</h2>
               <p>Available skills as below :</p>
               </div><!-- End Section Title -->

               <div class="container">

               <div class="row skills-content">

                    <div class="col-lg-6" v-if="skills">

                    <div class="progress" v-for="(skill, index) in skills.left" :key="index">
                    <span class="skill"><span>{{ skill.title }}</span> <i class="val">{{ skill.progress }}</i></span>
                    <div class="progress-bar-wrap">
                         <div :class="`progress-${skill.class}`"></div>
                    </div>
                    </div>

                    </div>

                    <div class="col-lg-6" v-if="skills">

                    <div class="progress" v-for="(skill, index) in skills.right" :key="index">
                    <span class="skill"><span>{{ skill.title }}</span> <i class="val">{{ skill.progress }}</i></span>
                    <div class="progress-bar-wrap">
                         <div :class="`progress-${skill.class}`"></div>
                    </div>
                    </div>

                    </div>

               </div>

               </div>

          </section><!-- /Skills Section -->
     </main>
</template>
<script>
     export default {
          data(){
               return {
                    skills:null
               }
          },
          mounted(){
               fetch('http://localhost:3000/data/skills.json')
                    .then((res) => res.json())
                    .then((json) => (this.skills = json))
                    .catch((err) => console.log(err.message))
          }
     }
</script>
<style>
     /* CSS */
     /* wrapper */
     .progress-bar-wrap {
     width: 100%;
     max-width: 800px;
     margin: 0 auto;
     border: 1px solid #ccc;
     background: rgba(0,0,0,0.04);
     height: 10px;
     border-radius: 6px;
     overflow: hidden;
     display: flex;
     align-items: center;
     }

     /* the bar — note selector .progress matches the HTML */
     .progress-spring-boot,
     .progress-mysql,
     .progress-laravel,
     .progress-js,
     .progress-vue,
     .progress-photoshop {
     height: 100%;
     width: 0%;                /* start collapsed */
     background: linear-gradient(90deg,#2b55ff,#1ea1ff);
     opacity: 0;
     border-radius: 6px;
     box-shadow: 0 6px 18px -8px rgba(0,0,0,0.4);
     }

     .progress-spring-boot{
     animation: progressSP 1s linear both;
     }

     @keyframes progressSP {
     from {
     opacity: 0;
     width: 0%;
     }
     to {
     opacity: 1;
     width: 95%;
     }
     }

     .progress-mysql{
     animation: progressSQL 1s linear both;
     }
     @keyframes progressSQL {
     from {
     opacity: 0;
     width: 0%;
     }
     to {
     opacity: 1;
     width: 75%;
     }
     }

     .progress-laravel{
     animation: progressLV 1s linear both;
     }
     @keyframes progressLV {
     from {
     opacity: 0;
     width: 0%;
     }
     to {
     opacity: 1;
     width: 90%;
     }
     }

     .progress-vue{
     animation: progressVUE 1s linear both;
     }
     @keyframes progressVUE {
     from {
     opacity: 0;
     width: 0%;
     }
     to {
     opacity: 1;
     width: 85%;
     }
     }

     .progress-js{
     animation: progressJS 1s linear both;
     }
     @keyframes progressJS {
     from {
     opacity: 0;
     width: 0%;
     }
     to {
     opacity: 1;
     width: 80%;
     }
     }

     .progress-photoshop{
     animation: progressPP 1s linear both;
     }
     @keyframes progressPP {
     from {
     opacity: 0;
     width: 0%;
     }
     to {
     opacity: 1;
     width: 55%;
     }
     }

     /* Optional: nicer mobile/touch behavior */
     @media (prefers-reduced-motion: reduce) {
     .progress-spring-boot,
     .progress-mysql,
     .progress-laravel,
     .progress-js,
     .progress-vue,
     .progress-photoshop 
     { animation: none !important; transition: none !important; }
     }
</style>