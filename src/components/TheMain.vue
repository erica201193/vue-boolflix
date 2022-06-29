<template>
    <div>
        <div class="mt-5">
            <ul class="list-unstyled">
                <li v-for="movie in moviesList" :key="movie.id">
                    <!-- <MovieCard
                    :card-title="movie.title" 
                    :original-title="movie.original_title"
                    :original-language="movie.original_language"
                    :vote-average="movie.vote_average"
                    ></MovieCard> -->
                    <MovieCard :movie="movie"></MovieCard>
                    {{ movie.title }}
                    {{ movie.original_title }}
                    {{ movie.original_language }}
                    {{ movie.vote_average }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

import axios from "axios";

export default {
    components: { MovieCard },
    props: {
        searchText: String,
    },
    data() {
        return {
            moviesList: [],
            seriesList: [],
        };
    },
    methods: {
        /**
         * 
         * @param {"movie"|"tv"} type
         */
        fetchData(type) {
            axios.get("https://api.themoviedb.org/3/search/" + type, {
                params: {
                    api_key: "3ccf13d52765e30b8380207d96d18e3d",
                    query: this.searchText,
                    language: "it-IT",
                }
            })
                .then((resp) => {
                    if (type === "movie") {
                        this.moviesList = resp.data.results;
                    }
                    else if (type === "tv") {
                        this.seriesList = resp.data.results;
                    }
            });
        },
    },
    watch: {
        searchText() {
            this.fetchData("movie");
            this.fetchData("tv");
        }
    },
}
</script>

<style></style>