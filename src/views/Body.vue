<template>
    <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background ">

      <img v-if="hero" :src="hero.wallpaper" alt="" class="">

      <div class="container" v-if="hero">
        <h2>{{ hero.name === '' ? 'Alex Smit' : hero.name }}</h2>
        <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">{{ hero.job === '' ? 'a Backend Developer' : hero.job }}</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>

    </section><!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section animationAbout">

        <!-- Section Title -->
        <div class="container section-title" v-if="aboutData">
            <h2>About</h2>
            <p>{{ aboutData.desc }}</p>
        </div><!-- End Section Title -->

        <div class="container" v-if="aboutData">

            <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
                <img src="../assets/img/aboutMe.jpg" class="img-fluid" alt="" style="filter: contrast(125%);">
            </div>
            <div class="col-lg-8 content">
                <h2 class="mb-5">{{ aboutData.job }}</h2>              
                <div class="row" v-for="(about, index) in aboutData.myBirth" :key="index">
                  <div class="col-lg-6">
                      <ul>
                        <li><i class="bi bi-chevron-double-right"></i> <strong>Birthday:</strong> <span>{{ about.birthday }}</span></li>
                        <li><i class="bi bi-chevron-double-right"></i> <strong>Website:</strong> <span>{{ about.website }}</span></li>
                        <li><i class="bi bi-chevron-double-right"></i> <strong>Phone:</strong> <span>{{ about.phone }}</span></li>
                        <li><i class="bi bi-chevron-double-right"></i> <strong>City:</strong> <span>{{ about.city }}</span></li>
                      </ul>
                  </div>
                  <div class="col-lg-6">
                      <ul>
                      <li><i class="bi bi-chevron-double-right"></i> <strong>Age:</strong> <span>{{ about.age }}</span></li>
                      <li><i class="bi bi-chevron-double-right"></i> <strong>Degree:</strong> <span>{{ about.degree }}</span></li>
                      <li><i class="bi bi-chevron-double-right"></i> <strong>Email:</strong> <span>{{ about.email }}</span></li>
                      <li><i class="bi bi-chevron-double-right"></i> <strong>Freelance:</strong> <span>{{ about.freelance }}</span></li>
                      </ul>
                  </div>
                </div>
                <br>
                
                <p class="py-3">
                  <i class="bi bi-geo-alt"></i><strong> Place Birth:&nbsp;</strong><i>{{ aboutData.placeBirth }}</i>
                </p>
            </div>
            </div>

        </div>

    </section><!-- /About Section -->

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

    <!-- Resume Section -->
    <section id="resume" class="resume section animationResume">

      <!-- Section Title -->
        <div class="container section-title">
            <h2>Resume</h2>
            <p>My name is Oudom Keo. I was born on February 2, 1999, in Trabaek village, Svay Chrum commune, Svay Chrum district, and Svay Rieng province.</p>
        </div><!-- End Section Title -->

        <div class="container">

          <div class="row">

          <div class="col-lg-6">

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>High School</h4>
                <h5>2014 - 2019</h5>
                <p><em>at Hun Sen High School.</em></p>
              </div><!-- Edn Resume Item -->

              <div class="resume-item">
                <h4>Bachelor Degree of Computer Science</h4>
                <h5>2019 - 2023</h5>
                <p><em>at Royal University of Phnom Penh.</em></p>
              </div><!-- Edn Resume Item -->

          </div>

          <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Backend Developer</h4>
                <h5>2023 - Present</h5>
                <p><em><i class="bi bi-bank"></i> Shinhan Bank Cambodia</em></p>
                <p>Developed an internal and external control system such as:</p>
                <ul>
                    <li>develop the selling property system</li>
                    <li>develop the billing service for pay via QR</li>
                    <li>Maintenance of the SBC website. etc.</li>
                </ul>
              </div>
          </div>

        </div>

      </div>

    </section><!-- /Resume Section -->

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section light-background hidden animationPortfolio">

      <!-- Section Title -->
      <div class="container section-title" v-if="hobbies">
        <h2>Hobbies</h2>
        <p>{{ hobbies.desc }}</p>
      </div><!-- End Section Title -->

      <div class="container" v-if="hobbies">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div class="row gy-4 isotope-container">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" v-for="(hobby,index) in hobbies.hobbyCard" :key="index">
              <div class="portfolio-content h-100">
                <img :src="hobby.img" class="img-fluid h-100" alt="">
                <div class="portfolio-info">
                  <h4>Hobby</h4>
                  <p>{{ hobby.cardName }}</p>
                </div>
              </div>
            </div><!-- End Portfolio Item -->
            
          </div><!-- End Portfolio Container -->

        </div>

      </div>

    </section><!-- /Portfolio Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section animationContact">

      <!-- Section Title -->
      <div class="container section-title">
        <h2>Contact</h2>
        <p>If you have inquiry please contact to me via email address as below.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-5">

            <div class="info-wrap">
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3> 
                  <p>Phnom Penh, #No 119, St 02</p>
                </div>
              </div><!-- End Info Item -->
  
              <div class="info-item d-flex">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+855 86629792</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>dom48489@gmail.com</p>
                </div>
              </div><!-- End Info Item -->

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div class="col-lg-7">
            <form action="forms/contact.php" method="post" class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" class="form-control" required>
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email-field" required>
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject-field" required>
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea class="form-control" name="message" rows="10" id="message-field" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>
</template>

<script>

  export default {
    data(){
      return {
        hero:null,
        aboutData:null,
        error:null,
        skills:null,
        hobbies:null
      }
    },
    mounted(){
      fetch('http://localhost:3000/data/hero.json')
        .then((res) => res.json())
        .then((json) => (this.hero = json))
        .catch((err) => console.log(err.message))

      fetch('http://localhost:3000/data/about.json')
        .then((res) => res.json())
        .then((json) => (this.aboutData = json))
        .catch((err) => console.log(err.message))

      fetch('http://localhost:3000/data/hobbies.json')
        .then((res) => res.json())
        .then((json) => (this.hobbies = json))
        .catch((err) => console.log(err.message))
    },
  }
</script>

<style scoped>
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