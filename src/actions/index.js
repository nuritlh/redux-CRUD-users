import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import { FETCH_USERS, UPDATE_USER, ADD_USER } from '../constants';

export const fetchUsers =  () =>  async dispatch => {
    const response = await jsonPlaceHolder.get('');
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


  