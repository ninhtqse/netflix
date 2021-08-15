import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListFailure, getListStart, getListSuccess} from "./ListAction"
import axios from 'axios';

export const getLists = async (dispatch) => {
    dispatch(getListStart());
    try {
        const res = await axios.get('/lists',{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(getListSuccess(res.data));
    } catch (error) {
        dispatch(getListFailure());
    }
}

// delete
export const deleteLists = async (id,dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete('/lists/' + id,{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFailure());
    }
}

//create
export const createList = async (list,dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post('/lists',list,{
            headers: {
                authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(createListSuccess(res.data));
    } catch (error) {
        dispatch(createListFailure());
    }
}