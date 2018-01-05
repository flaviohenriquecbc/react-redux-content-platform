import BaseCollection from './../base-collection/base-collection.js';
import { fetchCategoriesSuccess } from './action';

class CategoryApi extends BaseCollection {
    getType() {
        return 'categories';
    }

    fetchAll(dispatch) {
        this.getAll().then(categories =>
                dispatch(fetchCategoriesSuccess(categories)));
    }
}

export default new CategoryApi();
