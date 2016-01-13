import axios from "axios"


const API_URL = "http://chrissheppard.herokuapp.com/api";
var API = {};

API.listPages = function (page = 1, limit = 3) {
    let offset = (page - 1) * limit;

    return axios.get(`${API_URL}/page`, {
        params: {
            offset,
            limit,
            fields: "title,url"
        }
    }).then(function (response) {
        let pagination = response.data.meta.page;

        pagination.page = Math.floor(pagination.offset / pagination.limit) + 1 || 1;
        pagination.pages = Math.ceil(pagination.total / pagination.limit);

        return response.data;
    });
};

export default API;
