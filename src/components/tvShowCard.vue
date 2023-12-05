<template>
    <div class="w-64 bg-red-700 p-2 m-10 relative" @mouseover="showDetails = true" @mouseout="showDetails = false">
        <img :src="'https://image.tmdb.org/t/p/w500/' + info.poster_path" alt="" class="object-cover" v-show="!showDetails">

        <div class="p-5 absolute top-0 left-0 w-full h-full overflow-scroll  bg-black bg-opacity-70 text-white"
            v-show="showDetails">
            <p>Title: {{ info.name }}</p>
            <p>Language: {{ info.original_language }}</p>
            <p>Vote: {{ info.vote_average }}</p>
            <p>{{ info.overview }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "TvShowCard",
    props: {
        info: Object,
    },
    data() {
        return {
            showDetails: false,
        };
    },
};
</script>
  
<style scoped>
img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    transition: opacity 0.3s ease;
}

.p-5 {
    display: none;
}

.w-64:hover .p-5 {
    display: block;
}

.w-64:hover img {
    opacity: 0;
}
</style>
  