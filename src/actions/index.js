import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import { FETCH_USERS, UPDATE_USER, ADD_USER, DELETE_USER } from '../constants';

export const fetchUsers =  () =>  async dispatch => {
    const response = await jsonPlaceHolder.get('?results=20');
    dispatch({
        type: FETCH_USERS,
        payload: response.data.results
    })
};

export const addUser =  (user) =>  async dispatch => {
    dispatch({
        type: ADD_USER,
        payload: user
    })
};


export const editUser =  (user) =>  async dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload: user
    })
};

export const deleteUser =  (user) =>  async dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: user
    })
};

export const fetchRandomUser =  () =>  async dispatch => {
    const response = await jsonPlaceHolder.get('');
    console.log(response);
    
    dispatch({
        type: ADD_USER,
        payload: response.data.results[0]
    })
};