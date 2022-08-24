<script setup> 
  import WelcomeItem from './WelcomeItem.vue' 
  import DocumentationIcon from './icons/IconDocumentation.vue' 
  import ToolingIcon from './icons/IconTooling.vue' 
  import EcosystemIcon from './icons/IconEcosystem.vue' 
  import CommunityIcon from './icons/IconCommunity.vue' 
  import SupportIcon from './icons/IconSupport.vue' 
</script>

<template>
    <!-- main -->
      <main class="ds-pge-wrap">
        <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12  col-md-6  col-lg-5  col-xl-5  col-xxl-5 ds-left-section">
                  <div class="ds-sticky">
                    <figure>
                      <img src="src/assets/fotocasual.jpeg" style="max-width: 75%;border: none;outline: none;height: auto;" >
                    </figure>
                    
                    <div class="ds-socail">
                      <span>Contact</span>
                      <ul>
                        <li><a href="tel:+6285893236710">Hubungi Kami</a></li>
                        <li><a href="mailto:test@test.com">Email</a></li>
                        <!-- <li><a href="https://www.instagram.com/holilurrahman._/" target="_blanck">Instagram</a></li> -->
                        <li><a href="https://github.com/Choirizanourma" target="_blanck">Github</a></li>
                        
                      </ul>
                    </div>
                  </div>
              </div>
              <div class="col-12 col-sm-12  col-md-6  col-lg-7  col-xl-7  col-xxl-7 ds-right-section">
                <div class="ds-info-sectio-wrp">
                  <section class="ds-info-sectio">
                    <h1 class="ds-heading">
                      Choiriza Nourma Utami
                    </h1>
                    <h3>Front End Developer</h3>
                    <br>
                    <p>Saya Choiriza dari SMK Taruna Bhakti Depok. Saya mengambil jurusan Rekayasa Perangkat Lunak untuk membuat desain web di Front End dengan alat pengembang HTML, CSS, JavaScript, dan Browser</p>
                  </section>
                  <section class="ds-info-list-section">
                      <h3 class="">What I do</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Design UI & UX</li>
                        <li>Design Figma</li>
                        <li>Develop Web User Interface</li>
                        <li>Mobile Design</li>
                    </ul>
                  </section>
                </div>
              </div>
              <!-- <div class="col-12 col-sm-12  col-md-6  col-lg-7  col-xl-7  col-xxl-7 ds-right-section">
                
              </div> -->
              <RouterView />  
            </div>
        </div>
      </main>
      
      <!-- main -->
      <!-- footer -->
      <footer class="ds-footer">
        <div class="container">
          <span class="ds-copyright">Copyright © 2022 Choiriza. All right reserved.</span>
        </div>
      </footer>
</template>

<!-- <template>
  <header>
    <main>
  <div class="navbar">
    <div class="img">
    <img alt="Vue logo" class="logo" src="@/assets/fotocasual.jpeg" style="max-width: 30%; border: none; outline: none; height: 20%;" />
    </div>
  </div>

  <div class="ingpo">
    <h1>CHOIRIZA NOURMA UTAMI</h1>
    <h5>Front-End</h5>
    <h1>Profil Pribadi</h1>
    <p>Saya seorang  pelajar SMK Taruna Bhakti jurusan Rekayasa Perangkat Lunak.
       Saya juga berpengalaman dalam pembuatan project aplikasi berbasis web.</p>
    <h1>Keahlihan</h1>
    <p>- Desain UI/UX</p>
    <p>- Aplikasi Berbasis Web</p>
    <p>- Desain Wordpress</p>
  </div>
  </main>
  </header>
</template> -->

<style scoped>
.img {
  vertical-align: middle;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
