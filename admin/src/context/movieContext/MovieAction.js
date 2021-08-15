export const getMovieStart = () => ({
    type: "GET_MOVIE_START"
});

export const getMovieSuccess = (movies) => ({
    type: "GET_MOVIE_SUCCESS",
    payload: movies
});

export const getMovieFailure = () => ({
    type: "GET_MOVIE_FAILURE"
});

export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START"
});

export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
});

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE"
});

export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START"
});

export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
});

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE"
});

export const getMovieByIdStart = () => ({
    type: "GET_MOVIE_BY_ID_START"
});

export const getMovieByIdSuccess = (movies) => ({
    type: "GET_MOVIE_BY_ID_SUCCESS",
    payload: movies
});

export const getMovieByIdFailure = () => ({
    type: "GET_MOVIE_BY_ID_FAILURE"
});

export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START"
});

export const updateMovieSuccess = (id,movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie
});

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE"
});
