<template>
    <div>
        <div class="mt-5">
            <ul class="list-unstyled">
                <li v-for="movie in moviesList" :key="movie.id">
                <MovieCard
                :card-title="movie.title" 
                :original-title="movie.original_title"
                :original-language="movie.original_language"
                :vote-average="movie.vote_average"
                ></MovieCard>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

import axios from "axios"
export default {
    components: { MovieCard },
    props: {
        searchText: String,
    },
    data() {
        return {
            moviesList: [],
        };
    },
    methods: {
        fetchData() {
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "3ccf13d52765e30b8380207d96d18e3d",
                    query: this.searchText,
                    language: "it-IT",
                }
            })
                .then((resp) => {
                this.moviesList = resp.data.results;
            });
        },
    },
    watch: {
        searchText() {
            this.fetchData();
        }
    },
}
</script>

<style></style>