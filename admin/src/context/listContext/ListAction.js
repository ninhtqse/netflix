export const getListStart = () => ({
    type: "GET_LIST_START"
});

export const getListSuccess = (lists) => ({
    type: "GET_LIST_SUCCESS",
    payload: lists
});

export const getListFailure = () => ({
    type: "GET_LIST_FAILURE"
});

export const createListStart = () => ({
    type: "CREATE_LIST_START"
});

export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list
});

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE"
});


export const updateListStart = () => ({
    type: "UPLOAD_LIST_START"
});

export const updateListSuccess = (list) => ({
    type: "UPLOAD_LIST_SUCCESS",
    payload: list
});

export const updateListFailure = () => ({
    type: "UPLOAD_LIST_FAILURE"
});


export const deleteListStart = () => ({
    type: "DELETE_LIST_START"
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE"
});