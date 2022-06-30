<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h3>{{ movieTitle }}</h3>
                <h5>Titolo originale: {{ originalTitle }}</h5>
                <div>Lingua: <lang-flag :iso="movie.original_language" /> </div>
                <div>Rating: {{ movie.vote_average }}</div>
                <img :src="moviePoster" alt="">
                <h2>prova percorso</h2>
                <div class="bg-dark">
                    <img src="../../public/imgError.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object
    },
    computed: {
        movieTitle() {
            if (this.movie.title) {
                return this.movie.title
            }
            return this.movie.name
        },
        originalTitle() {
                if (this.movie.original_title) {
                return this.movie.original_title
            }
            return this.movie.original_name
        },
        moviePoster() {
            if (this.movie.poster_path === null) {
                return "../../public/imgError.png"
            }
            return "https://image.tmdb.org/t/p/" + "w342" + this.movie.poster_path
        },
    },
}
</script>

<style></style>
