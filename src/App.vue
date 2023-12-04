<script>
import moviesCard from "./components/moviesCard.vue";
import searchBar from "./components/searchBar.vue";
import { fetchData } from "./store.js";

export default {
  components: {
    moviesCard,
    searchBar
  },
  data() {
    return {
      store: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.store.movies = await fetchData();
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    },
    handleSearch(searchTerm) {
      this.store.apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${this.store.headers.Authorization}`;
      this.loadData();
    },
  },
};
</script>

<template>
  <div>
    <h1>ffytfjyuigg</h1>
    <searchBar @search="handleSearch" />
    <moviesCard :info="store.movies" />
  </div>
</template>

<style scoped></style>
