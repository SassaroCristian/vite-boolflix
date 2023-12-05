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
      store: {
        apiUrl: 'https://api.themoviedb.org/3/discover/movie',
        movies: [],
        filteredMovies: [],
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZjOGI1YjRmOTI5ZTg1NmU3NjEwMzI5NmVkNGI5MSIsInN1YiI6IjY1NmRiNWM2NjUxN2Q2MDBjYzQyNzQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHf6cFUeM_GJ84vuQOIaPntRdc18F7Vhw-P1tmlgpfc',
        }
      },
      searchTerm: "",
      filteredData: [],
    };
  },
  methods: {
    async loadData() {
      try {
        this.store.movies = await fetchData(this.searchTerm);
        this.filteredData = JSON.parse(JSON.stringify(this.store.movies.results));
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    },
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
      this.filteredData = this.store.movies.results.filter((el) => {
        return el.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
      return this.filteredData;
    }

  },
  mounted() {
    this.loadData();
  },
};

</script>

<template>
  <div>
    <searchBar @search="handleSearch" />
    <div class="flex flex-wrap w-8/12 m-auto" v-if="store.movies && store.movies.results">
      <moviesCard v-for="movie in filteredData" :info="movie" :key="movie.id" />
    </div>

    <div v-else>
      Loading movies...
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style lang="scss" scoped>
@use './styles/partials/_variables.scss';
</style>
