import BaseCollection from './../base-collection/base-collection.js';
// import { fetchCategories, fetchCategoriesSuccess } from './action';

class CategoryApi extends BaseCollection {
    constructor() {
        super('categories');
    }

    // fetchAll() {
    //     return (dispatch) => {
    //         dispatch(fetchCategories())
    //         return this.getAll().then(categories => {
    //             console.log("///////");
    //             console.log(categories);
    //             dispatch(fetchCategoriesSuccess(categories));
    //         });
    //     };
    // }
}

export default new CategoryApi();
