import axios from 'axios';

const URL = 'http://localhost:5000/articles';

async function getArticles() {
    return axios.get(URL);
}

async function getArticlesWithSkip(skip) {
    return axios.get(`${URL}?skip=${skip}`);
}

async function getArticlesByDateWithSkip(order,skip) {
    return axios.get(`${URL}/date/${order}?skip=${skip}`);
}

async function getArticlesByDate(order) {
    return axios.get(`${URL}/date/${order}`);
}

async function getArticleByTitle(title) {
    return axios.get(`${URL}/title/${title}`);
}

async function getArticlesByTitleWithSkip(title,skip) {
    return axios.get(`${URL}/title/${title}?skip=${skip}`);
}

const api = {
    getArticles,
    getArticlesWithSkip,
    getArticlesByDate,
    getArticleByTitle,
    getArticlesByDateWithSkip,
    getArticlesByTitleWithSkip
};

export default api;