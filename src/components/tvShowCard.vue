<template>
    <div class="rounded-lg w-64 p-2 m-2 relative" @mouseover="showDetails = true" @mouseout="showDetails = false">
        <img :src="'https://image.tmdb.org/t/p/w500/' + info.poster_path" alt="" class="object-cover img_poster"
            v-show="!showDetails">

        <div class="d-none p-5 absolute top-0 left-0 w-full h-full overflow-scroll  bg-black bg-opacity-70 text-white"
            v-show="showDetails">
            <p>Title: {{ info.name }}</p>
            <p>{{ info.original_language }}</p>
            <p>Language: <img class="flag_img" :src="getFlagPath(info.original_language)" alt="flag"></p>
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
    methods: {
        getFlagPath(language) {
            return `/flags/${language}.svg`;
        },
    },
};
</script>
  
<style scoped>
.d-none {
    display: none;
}

.w-64:hover .d-none {
    display: block;
}

.w-64:hover .movie_poster {
    opacity: 0;
}
</style>
  