<template>
    <div class="star-rating">
        <span v-for="n in 5" :key="n" :class="{ 'filled': n <= filledStars }">&#9733;</span>
    </div>
</template>
  
<script>
export default {
    props: {
        rating: Number,
    },
    computed: {
        filledStars() {
            return Math.ceil(this.rating / 2);
        },
    },
};
</script>
  
<style scoped>
.star-rating {
    font-size: 1.3rem;
    color: grey;
}

.filled {
    color: gold;
}
</style>
  