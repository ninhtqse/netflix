import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMovieByIdFailure, getMovieByIdStart, getMovieByIdSuccess, getMovieFailure, getMovieStart, getMovieSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieAction"
import axios from 'axios';

export const getMovies = async (dispatch) => {
    dispatch(getMovieStart());
    try {
        const res = await axios.get('/movies',{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(getMovieSuccess(res.data));
    } catch (error) {
        dispatch(getMovieFailure());
    }
}

export const getMovieById = async (id,dispatch) => {
    dispatch(getMovieByIdStart());
    try {
        const res = await axios.get('/movies/find/'+ id ,{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(getMovieByIdSuccess(res.data));
    } catch (error) {
        dispatch(getMovieByIdFailure());
    }
}

//delete
export const deleteMovie = async (id,dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete('/movies/' + id,{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(deleteMovieSuccess(id));
    } catch (error) {
        dispatch(deleteMovieFailure());
    }
}

//create
export const createMovie = async (movie,dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await axios.post('/movies',movie,{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(createMovieSuccess(res.data));
    } catch (error) {
        dispatch(createMovieFailure());
    }
}

//update
export const updateMovie = async (id,movie,dispatch) => {
    console.log(movie)
    dispatch(updateMovieStart());
    try {
        const res = await axios.put('/movies/'+id,movie,{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(updateMovieSuccess(res.data));
    } catch (error) {
        dispatch(updateMovieFailure());
    }
}