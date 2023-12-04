import axios from 'axios';
import { reactive, toRefs } from 'vue'

const store = reactive({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
        query: '',
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZjOGI1YjRmOTI5ZTg1NmU3NjEwMzI5NmVkNGI5MSIsInN1YiI6IjY1NmRiNWM2NjUxN2Q2MDBjYzQyNzQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHf6cFUeM_GJ84vuQOIaPntRdc18F7Vhw-P1tmlgpfc'
    },
    data: null,
});

export async function fetchData() {
    try {
        const response = await axios.request(store);
        store.data = response.data;
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default toRefs(store);