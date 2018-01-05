const API_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;
const REACT_APP_ROOT_BACKEND_URL = process.env.REACT_APP_ROOT_BACKEND_URL;

const headers = {
    Accept: 'application/json',
    Authorization: `Basic ${API_ID}:${APP_KEY}`
};

export default class BaseEntityApi {
    constructor() {
        this.type = this.getType();
    }

    getType() {
        throw new Error('You forgot the type of the collection');
    }

    async getAll() {
        const res = await fetch(`${REACT_APP_ROOT_BACKEND_URL}/${this.type}`, { headers });
        return res.json();
    }

    getById(id) {
        const res = fetch(`${REACT_APP_ROOT_BACKEND_URL}/${this.type}/${id}`, { headers });
        return Promise.all([res, res.json()]);
    }

    post(data) {
        const res = fetch(
            `${REACT_APP_ROOT_BACKEND_URL}/${this.type}`,
            {
                headers,
                method: 'POST',
                body: JSON.stringify(data)
            }
        );
        return Promise.all([res, res.json()]);
    }

    put(id, data) {
        const res = fetch(
            `${REACT_APP_ROOT_BACKEND_URL}/${this.type}/${id}`,
            {
                headers,
                method: 'PUT',
                body: JSON.stringify(data)
            }
        );
        return Promise.all([res, res.json()]);
    }

    remove(id) {
        const res = fetch(
            `${REACT_APP_ROOT_BACKEND_URL}/${this.type}/${id}`,
            {
                headers,
                method: 'DELETE'
            }
        );
        return Promise.all([res, res.json()]);
    }
}
