<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import axios from "axios";
///import { getMovies }  from '@/services/api/movie.js';
import { useMovieDataStore } from '@/stores/movies.js';

const movieDataStore = useMovieDataStore();

async function fetchMovies() {
  const data = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=cd3d87baccc2047bf23e35c24b99cafa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
       });
  console.log(data)
  movieDataStore.setMovieList(data);
}

onMounted(() => {
   fetchMovies();
});

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/MovieDetail">Detail</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
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
