import axios from "axios"


const API_URL = "http://chrissheppard.herokuapp.com/api";
var API = {};


API._nestIncludedAttributes = function (data, included) {
    Object.keys(data.attributes).forEach(function (key) {
        let attr = data.attributes[key];
        // do something with obj
        if (Array.isArray(attr)) {
            data.attributes[key] = attr.map(id => included.find(include => (include.id === id)));

            // Remove any items that were not found
            data.attributes[key] = data.attributes[key].filter(Object);
        }
    });
};

API._nestIncluded = function (response) {
    if (!response.data || !response.included.length) {
        return response;
    }

    // Fix includes object
    response.included.forEach(include => API._nestIncludedAttributes(include, response.included));

    // Fix data object
    API._nestIncludedAttributes(response.data, response.included);

    return response;
};

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
    return API.get(`/page/${id}`, {
        include: "regions.content"
    }).then(API._nestIncluded);
};


export default API;
