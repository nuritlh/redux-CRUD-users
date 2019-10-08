import { FETCH_USERS, UPDATE_USER, ADD_USER } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            return [...state, action.payload];
        case UPDATE_USER:
            return state.map(
                user => {
                    debugger
                    return (user.cell === action.payload.cell ? { ...user, ...action.payload } : user)}
              );
        default:
            return state;
    }
}