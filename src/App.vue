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
      searchTerm: "",
    };
  },
  methods: {
    async loadData() {
      try {
        this.store.movies = await fetchData();
        console.log(this.store);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    },
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
      this.loadData()
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <div>
    <searchBar @search="handleSearch" />
    <moviesCard v-if="store.movies && store.movies.results" :info="store.movies.results" searchTerm="searchTerm" />
  </div>
</template>

<style scoped></style>
