import axios from 'axios';

const URL = 'http://localhost:5000/articles';

async function getArticles() {
    return axios.get(URL);
}

const api = {
    getArticles
};

export default api;