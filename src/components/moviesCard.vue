<template>
    <div class="rounded-lg w-64 p-2 m-2 relative" @mouseover="showDetails = true" @mouseout="showDetails = false">
        <img :src="'https://image.tmdb.org/t/p/w500/' + info.poster_path" alt="" class="object-cover img_poster"
            v-show="!showDetails">

        <div class="d-none p-5 absolute top-0 left-0 w-full h-full overflow-scroll  bg-black bg-opacity-70 text-white"
            v-show="showDetails">
            <p>Title: {{ info.title }}</p>
            <div class="flex">
                <p>Language:</p><img class="flag_img ml-10" :src="getFlagPath(info.original_language)" alt="flag">
            </div><br>
            <p>Rating:
                <StarRating :rating="info.vote_average" />
            </p> <br>
            <p>{{ info.overview }}</p>
        </div>
    </div>
</template>
  
<script>
import StarRating from './StarRating.vue';
export default {
    name: "MoviesCard",
    components: {
        StarRating,
    },
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
  