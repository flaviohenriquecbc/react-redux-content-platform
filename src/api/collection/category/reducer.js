import { FETCH_CATEGORIES_SUCCESS } from './action';

// export function requestCategories() {
//     return {
//         type: REQUEST_CATEGORIES
//     };
// }

export function fetchCategoriesSuccess(state = {}, action) {
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

