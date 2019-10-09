import { FETCH_USERS, UPDATE_USER, ADD_USER, DELETE_USER } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            return [...state, action.payload];
        case UPDATE_USER:
            return state.map(
                user => {
                    return (user.cell === action.payload.cell ? { ...user, ...action.payload } : user)}
              );
        case DELETE_USER:
            return state.filter(user => user.cell !== action.payload.cell);
        default:
            return state;
    }
}