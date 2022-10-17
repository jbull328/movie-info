<script setup>
import { useMovieDataStore } from "@/stores/movies.js";
import { computed, ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const movieDataStore = useMovieDataStore();
const basePosterurl = ref('http://image.tmdb.org/t/p/w154')

const movieList = computed(() => {
    return movieDataStore.movieList
});

function goToMovieDetail(id) {
    router.push(`/movieDetail${id}`)
}

</script>

<template>
    <container class="card-cont">
        <card 
            v-for="movie in movieList" 
            :key="movie"
            @click="goToMovieDetail(movie.id)"
            >
        <cardSection >
            <img class="movie-poster" :src="`${basePosterurl}${movie.poster_path}`">
        </cardSection>
        <cardSection class="movie-details">
            <p>{{movie.title}}</p>
            <p>Popilarity: {{movie.vote_average}}</p>
        </cardSection>
    </card>
    </container>
    
</template>

<style >
    .card-cont {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-row-gap: 1rem;
    }

    card {
        
        border: 1px solid lightslategrey;
        border-radius: 1.2rem;
        margin: 1.8rem;
        box-shadow: inset 0 0 0 0 hsla(160, 100%, 37%, 1);
        color: hsla(160, 100%, 37%, 1);
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    }

    card:hover {
        box-shadow: inset 160px 0 0 0 hsla(160, 100%, 37%, 0.2);;
        color: white;
    }          

    .movie-poster {
        border-radius: 1.08rem 1.08rem 0 0;
    }

    .movie-details {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 1.05rem;
    }


</style>