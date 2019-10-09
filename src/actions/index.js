import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import { FETCH_USERS, UPDATE_USER, ADD_USER, DELETE_USER } from '../constants';
import utils from '../services/utils';

export const fetchUsers =  () =>  async dispatch => {
    let users;
    if (utils.loadFromStorage('users') !== null ) {
        users = utils.loadFromStorage('users');
        
    } else {
        const response = await jsonPlaceHolder.get('?results=20');
        users = response.data.results;
        utils.saveToStorage('users', users);
    }
    dispatch({
        type: FETCH_USERS,
        payload: users
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
    dispatch({
        type: ADD_USER,
        payload: response.data.results[0]
    })
};