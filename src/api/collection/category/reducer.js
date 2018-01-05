import { FETCH_CATEGORIES_SUCCESS } from './action';

export function categories(state = {}, action) {
    switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
        return {
            ...state,
            categories: action.categories
        };
    default:
        return state;
    }
}

