<script>
import MoviesCard from "./components/moviesCard.vue";
import searchBarMovies from "./components/searchBarMovies.vue";
import searchBarTvShows from "./components/searchBarTvShows.vue";
import TvShowCard from "./components/TvShowCard.vue";
import { fetchData as fetchMoviesData } from "./storeMovies.js";
import { fetchDataTvShows } from "./storeTvShow.js";

export default {
  components: {
    MoviesCard,
    TvShowCard,
    searchBarMovies,
    searchBarTvShows,

  },
  data() {
    return {
      storeMovies: {
        apiUrl: 'https://api.themoviedb.org/3/discover/movie',
        movies: [],
        filteredMovies: [],
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZjOGI1YjRf...(your token)'
        }
      },
      storeTvShow: {
        apiUrl: 'https://api.themoviedb.org/3/discover/tv',
        tvShows: [],
        filteredTvShows: [],
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZjOGI1YjRf...(your token)'
        }
      },
      searchTermMovies: "",
      searchTermTvShow: "",
      filteredDataMovies: [],
      filteredDataTvShows: [],
    };
  },
  methods: {
    async loadDataMovies() {
      try {
        this.storeMovies.movies = await fetchMoviesData(this.searchTermMovies);
        this.filteredDataMovies = JSON.parse(JSON.stringify(this.storeMovies.movies.results));
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    },
    async loadDataTvShow() {
      try {
        this.storeTvShow.tvShows = await fetchDataTvShows(this.searchTermTvShow); // Use the correct function name
        this.filteredDataTvShows = JSON.parse(JSON.stringify(this.storeTvShow.tvShows.results));
        console.log("TV Shows List:", this.storeTvShow.tvShows);
      } catch (error) {
        console.error("Failed to load TV show data:", error);
      }
    },
    handleSearchMovies(searchTermMovies) {
      this.searchTermMovies = searchTermMovies;
      this.filteredDataMovies = this.storeMovies.movies.results.filter((el) => {
        return el.title.toLowerCase().includes(this.searchTermMovies.toLowerCase());
      });
    },
    handleSearchTvShows(searchTermTvShows) {
      this.searchTermTvShow = searchTermTvShows;
      this.filteredDataTvShows = this.storeTvShow.tvShows.results.filter((el) => {
        return el.name.toLowerCase().includes(this.searchTermTvShow.toLowerCase());
      });
    }
  },
  mounted() {
    this.loadDataMovies();
    this.loadDataTvShow();
  },
};
</script>

<template>
  <p class="text-white font-extrabold text-9xl p-5">Boolflix</p>
  <div class="p-10">
    <searchBarMovies @search="handleSearchMovies" placeholder="Search Movies" />
    <div class="w-11/12 overflow-hidden overflow-x-scroll m-auto">
      <div class=" inline-flex">
        <MoviesCard v-for="movie in filteredDataMovies" :info="movie" :key="movie.id" />
      </div>
    </div>


    <searchBarTvShows @search="handleSearchTvShows" placeholder="Search TV Shows" />

    <div class="w-11/12 overflow-hidden overflow-x-scroll m-auto">
      <div class="inline-flex">
        <TvShowCard v-for="tvShow in filteredDataTvShows" :info="tvShow" :key="tvShow.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style lang="scss" scoped>
@use './styles/partials/_variables.scss';
</style>
