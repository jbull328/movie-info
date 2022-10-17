<script setup>
import { ref } from 'vue';

defineProps({
    movieDetail: Object
})

const baseBackdropUrl = ref('http://image.tmdb.org/t/p/w1280')

</script>

<template>
    <movieMain class="movie-main">
        <backdrop>
            <img :src="`${baseBackdropUrl}${movieDetail.backdrop_path}`" />
        </backdrop>
        <movieDetails>
            <h1>{{movieDetail.title}}</h1>
            <h3>{{movieDetail.overview}}</h3>
            <p>Runtime: {{movieDetail.runtime}} minutes</p>
            <a :href="`${movieDetail.homepage}`">Link</a>
        </movieDetails>
        
    </movieMain>

</template>

<style>
    .movie-main {
        display: flex;
        flex-direction: column;
    }

 </style>