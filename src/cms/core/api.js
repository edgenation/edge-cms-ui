import axios from "axios"


const API_URL = "http://chrissheppard.herokuapp.com/api";
var API = {};


API.get = function (url, params) {
    if (params) {
        params = { params };
    }

    return axios.get(API_URL + url, params).then(response => response.data);
};


API.listPages = function (page = 1, limit = 3) {
    let offset = (page - 1) * limit;

    return API.get("/page", {
        offset,
        limit,
        fields: "title,url"
    }).then(function (response) {
        let pagination = response.meta.page;

        pagination.page = Math.floor(pagination.offset / pagination.limit) + 1 || 1;
        pagination.pages = Math.ceil(pagination.total / pagination.limit);

        return response;
    });
};


API.getPage = function (id) {
    return API.get(`/page/${id}`);
};


export default API;
