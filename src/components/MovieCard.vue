<template>
    <div>
        <div class="card">
            <img :src="imgUrl" alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Titolo: {{ cardTitle }} </h5>
                <h6>Titolo originale: {{ originalTitle }} </h6>
                <div>Lingua originale: {{ originalLanguage }} </div>
                <div>Voto: {{ voteAverage }} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: String,
        cardTitle: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: String,
    },
    data() {
        return {
        };
    },
    methods: {
        
    }
}
</script>

<style></style>
