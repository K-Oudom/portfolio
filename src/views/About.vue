<template>
    <main class="main">
       <!-- About Section -->
    <section id="about" class="about section light-background">

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
    </main>
</template>
<script>
  export default {
    data(){
      return{
        aboutData:null
      }
    },
    mounted(){
      fetch('http://localhost:3000/data/about.json')
        .then((res) => res.json())
        .then((json) => (this.aboutData = json))
        .catch((err) => console.log(err.message))
    }
  }
</script>