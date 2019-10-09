import { FETCH_USERS, UPDATE_USER, ADD_USER, DELETE_USER } from '../constants';
import utils from '../services/utils';

export default (state = [], action) => {
    let users;
    switch(action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            utils.saveToStorage('users', [...state, action.payload]);
            return [...state, action.payload];
        case UPDATE_USER:
            users = state.map(
                user => {
                    return (user.cell === action.payload.cell ? { ...user, ...action.payload } : user)});
            utils.saveToStorage('users', users);
            return users
        case DELETE_USER:
            users = state.filter(user => user.cell !== action.payload.cell);
            utils.saveToStorage('users', users);
            return users
        default:
            return state;
    }
    
}