<template>
    <form class="w-11/12 m-auto" @submit.prevent="search">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input v-model="searchTermUpcomingMovies" @input="search" type="search" id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-red-700 rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Search for Movies..." required>
        </div>
    </form>
</template>
  
<script>
export default {
    data() {
        return {
            searchTermUpcomingMovies: "",
        };
    },
    methods: {
        search() {
            this.$emit('search', this.searchTermUpcomingMovies);
        },
    },
};
</script>
  
<style scoped></style>
  