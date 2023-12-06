<script>
import MoviesCard from "./components/moviesCard.vue";
import TvShowCard from "./components/TvShowCard.vue";
import UpcomingMoviesCard from "./components/UpcomingMoviesCard.vue";
import searchBarMovies from "./components/searchBarMovies.vue";
import searchBarTvShows from "./components/searchBarTvShows.vue";
import searchBarUpcomingMovies from "./components/searchBarUpcomingMovies.vue";
import { fetchData as fetchMoviesData } from "./storeMovies.js";
import { fetchDataTvShows } from "./storeTvShow.js";
import { fetchDataUpcomingMovies } from "./storeUpcomingMovies.js";

export default {
  components: {
    MoviesCard,
    TvShowCard,
    UpcomingMoviesCard,
    searchBarMovies,
    searchBarTvShows,
    searchBarUpcomingMovies
  },
  data() {
    return {
      storeMovies: {
        apiUrl: 'https://api.themoviedb.org/3/discover/movie',
        movies: [],
        filteredMovies: [],
      },
      storeTvShow: {
        apiUrl: 'https://api.themoviedb.org/3/discover/tv',
        tvShows: [],
        filteredTvShows: [],
      },
      storeUpcomingMovies: {
        apiUrl: 'https://api.themoviedb.org/3/movie/upcoming',
        UpcomingMovies: [],
        filteredUpcomingMovies: [],
      },
      searchTermMovies: "",
      searchTermTvShow: "",
      searchTermUpcomingMovies: "",
      filteredDataMovies: [],
      filteredDataTvShows: [],
      filteredDataUpcomingMovies: [],
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
        this.storeTvShow.tvShows = await fetchDataTvShows(this.searchTermTvShow);
        this.filteredDataTvShows = JSON.parse(JSON.stringify(this.storeTvShow.tvShows.results));
      } catch (error) {
        console.error("Failed to load TV show data:", error);
      }
    },
    async loadDataUpcomingMovies() {
      try {
        this.storeUpcomingMovies.UpcomingMovies = await fetchDataUpcomingMovies(this.searchTermUpcomingMovies);
        this.filteredDataUpcomingMovies = JSON.parse(JSON.stringify(this.storeUpcomingMovies.UpcomingMovies.results));
      } catch (error) {
        console.error("Failed  load TV show data:", error);
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
    },
    handleSearchUpcomingMovies(searchTermUpcomingMovies) {
      this.searchTermUpcomingMovies = searchTermUpcomingMovies;
      this.filteredDataUpcomingMovies = this.storeUpcomingMovies.UpcomingMovies.results.filter((el) => {
        return el.title.toLowerCase().includes(this.searchTermUpcomingMovies.toLowerCase());
      });
    }
  },
  mounted() {
    this.loadDataMovies();
    this.loadDataTvShow();
    this.loadDataUpcomingMovies();
  },
};
</script>

<template>
  <p class="bg-red-700 text-white font-extrabold text-9xl p-10">Boolflix</p>

  <div class="p-10 ">
    <p class="text-white font-extrabold text-6xl p-5"> MOVIES</p>
    <searchBarMovies @search="handleSearchMovies" placeholder="Search Movies" />
    <div class="w-11/12 overflow-hidden overflow-x-scroll m-auto">
      <div class=" inline-flex">
        <MoviesCard v-for="movie in filteredDataMovies" :info="movie" :key="movie.id" />
      </div>
    </div>

    <p class="text-white font-extrabold text-6xl p-5">UPCOMING MOVIES</p>
    <searchBarUpcomingMovies @search="handleSearchUpcomingMovies" placeholder="Search Upcoming Movies" />
    <div class="w-11/12 overflow-hidden overflow-x-scroll m-auto">
      <div class=" inline-flex">
        <UpcomingMoviesCard v-for="upcomingMovie in filteredDataUpcomingMovies" :info="upcomingMovie"
          :key="upcomingMovie.id" />
      </div>
    </div>

    <p class="text-white font-extrabold text-6xl p-5">TV SHOWS</p>
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
