import { defineStore } from 'pinia';

export const useMovieDataStore = defineStore('movieData', {
    state: () => ({
        movieList: [],
        movieDetail: {}
    }),

    actions: {
        setMovieList(data) {
            this.movieList = data.data.results
        },

        setMovieDetail(data) {
            this.movieDetail = data.data
        }
    }
});

