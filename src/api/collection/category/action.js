// import BaseCollection from './../base-collection/base-collection';

// export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
// export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';


// export function requestCategories() {
//     return {
//         type: FETCH_CATEGORIES
//     };
// }

export function fetchCategoriesSuccess({ categories }) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        categories
    };
}

// export function fetchCategories() {
//     return (dispatch) => {
//         dispatch(requestCategories());
//         return BaseCollection.getAll('categories').then(categories => {
//             console.log("///////");
//             console.log(categories);
//             dispatch(fetchCategoriesSuccess(categories));
//         });
//     };
// }
