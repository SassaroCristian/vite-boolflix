import axios from 'axios';
import { reactive, toRefs } from 'vue';

const storeTvShow = reactive({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/tv',
    params: {
        include_adult: 'true',
        language: 'en-US',
        page: '1',

    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZjOGI1YjRmOTI5ZTg1NmU3NjEwMzI5NmVkNGI5MSIsInN1YiI6IjY1NmRiNWM2NjUxN2Q2MDBjYzQyNzQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHf6cFUeM_GJ84vuQOIaPntRdc18F7Vhw-P1tmlgpfc'
    },
    data: null,
    tvShows: null,
    apiUrl: "",
});

export async function fetchDataTvShows() {
    try {
        const response = await axios.get(storeTvShow.url, { params: storeTvShow.params, headers: storeTvShow.headers });
        storeTvShow.data = response.data;
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default toRefs(storeTvShow);
