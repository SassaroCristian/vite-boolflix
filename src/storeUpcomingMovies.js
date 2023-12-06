import axios from 'axios';
import { reactive, toRefs } from 'vue';

const storeUpcomingMovies = reactive({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZjOGI1YjRmOTI5ZTg1NmU3NjEwMzI5NmVkNGI5MSIsInN1YiI6IjY1NmRiNWM2NjUxN2Q2MDBjYzQyNzQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YHf6cFUeM_GJ84vuQOIaPntRdc18F7Vhw-P1tmlgpfc'
    }
});

export async function fetchDataUpcomingMovies() {
    try {
        const response = await axios.get(storeUpcomingMovies.url, { params: storeUpcomingMovies.params, headers: storeUpcomingMovies.headers });
        storeUpcomingMovies.data = response.data;

        // Aggiungi il console log per vedere l'oggetto delle upcoming movies
        console.log('Upcoming Movies:', storeUpcomingMovies.data);

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default toRefs(storeUpcomingMovies);
