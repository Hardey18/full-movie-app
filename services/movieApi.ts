import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieApiHeaders = {
    "x-rapidapi-host": import.meta.env.VITE_APP_HOST,
    "x-rapidapi-key": import.meta.env.VITE_APP_API_KEY,
};

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const createRequest = (url: any) => ({ url, headers: movieApiHeaders });

export const movieApi: any = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: ({ type, page, year }) =>
                createRequest(`/?type=${type}&page=${page}&year=${year}`),
        }),
        getMovieDetails: builder.query({
            query: ({ type, imdb }) =>
                createRequest(`/?type=${type}&imdb=${imdb}`),
        }),
        getRecentlyAdded: builder.query({
            query: ({ type, page }) =>
                createRequest(`/?type=${type}&page=${page}`),
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieDetailsQuery,
    useGetRecentlyAddedQuery,
} = movieApi;
