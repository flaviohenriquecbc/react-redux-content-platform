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

    async getAll(params) {
        const res = await fetch(`${REACT_APP_ROOT_BACKEND_URL}/${params || this.type}`, { headers });
        return res.json();
    }

    async getById(id) {
        const res = await fetch(`${REACT_APP_ROOT_BACKEND_URL}/${this.type}/${id}`, { headers });
        return res.json();
    }

    async post(data) {
        const res = await fetch(
            `${REACT_APP_ROOT_BACKEND_URL}/${this.type}`,
            {
                headers,
                method: 'POST',
                body: JSON.stringify(data)
            }
        );
        return res.json();
    }

    async put(id, data) {
        const res = await fetch(
            `${REACT_APP_ROOT_BACKEND_URL}/${this.type}/${id}`,
            {
                headers,
                method: 'PUT',
                body: JSON.stringify(data)
            }
        );
        return res.json();
    }

    async remove(id) {
        const res = await fetch(
            `${REACT_APP_ROOT_BACKEND_URL}/${this.type}/${id}`,
            {
                headers,
                method: 'DELETE'
            }
        );
        return res.json();
    }
}
