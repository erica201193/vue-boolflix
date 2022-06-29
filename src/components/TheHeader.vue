<template>
    <div>
        <div class="row row-cols-3 justify-content-center text-center pt-4">
            <div class="col">
                <input type="text" class="form-control" placeholder="Cerca film o serie tv..." v-model="testoCercato" @keyup-enter="startSearch">
                <button type="button" class="btn btn-primary mt-3" @click="startSearch">Cerca</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            testoCercato: "",
        };
    },
    methods: {
        startSearch() {
            this.$emit("searchText", this.testoCercato)
        }
    }
}
</script>

<style></style>


