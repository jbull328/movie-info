<script setup>
import { onMounted } from 'vue';
import MovieDetail from "../components/MovieDetail.vue";
import { useMovieDataStore } from '@/stores/movies.js';
import axios from 'axios';

const movieDataStore = useMovieDataStore();

const props = defineProps({
    id: String
});

async function fetchMovieDetails() {
  const data = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${props.id}?api_key=cd3d87baccc2047bf23e35c24b99cafa&language=en-US`
        
    });
  console.log(data)
  movieDataStore.setMovieDetail(data);
}

onMounted(() => {
   fetchMovieDetails();
});

</script>

<template>
    <MovieDetail :movie-detail="movieDataStore.movieDetail"/>
</template>