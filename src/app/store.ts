import { configureStore } from "@reduxjs/toolkit";

import { movieApi } from "../../services/movieApi";

export default configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
    },
});
