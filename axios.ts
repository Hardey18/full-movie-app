// import dotenv from 'dotenv';
import axios from "axios";

// dotenv.config();

const API = axios.create({
    baseURL: "https://movies-tvshows-data-imdb.p.rapidapi.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "x-rapidapi-key": "6aaf18a826msh5aa261fada3e4e7p1517acjsn3d288ba76176",
    },
});

export default API;
