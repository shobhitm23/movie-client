import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://cors-anywhere.herokuapp.com/http://localhost:8080'
});