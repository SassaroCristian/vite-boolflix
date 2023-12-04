<template>
    <div>
        {{ console.log() }}
        <div v-for="movie in info" :key="movie.id">
            <div class="card w-96 h-44 bg-gradient-to-tr from-yellow-400 to-red-700 p-10 m-5">
                <p>{{ movie.title }}</p>
                <p v-if="searchTerm">{{ searchTerm }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "moviesCard",
    props: {
        info: Object,
        searchTerm: String,
    }
};
</script>
  
<style scoped>
/* Stili per la card */
</style>
  