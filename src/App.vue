<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
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
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg=" Hello Everyone" /> -->

      
    </div>
  </header>
      <nav>
        <RouterLink to="/">Personal</RouterLink>
        <RouterLink to="/skill">Skill</RouterLink>
      </nav>

  <RouterView />
</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

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
