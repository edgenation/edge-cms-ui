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
    if (!response.data || !response.included || !response.included.length) {
        return response;
    }

    // Fix includes object
    response.included.forEach(include => API._nestIncludedAttributes(include, response.included));

    // Fix data object
    API._nestIncludedAttributes(response.data, response.included);

    return response;
};

API._request = function (url, options) {
    return axios({
        baseURL: API_URL,
        headers: {
            "Accept": "application/vnd.api+json, application/json",
            //"Content-Type": "application/vnd.api+json",
            "X-Requested-With": "XMLHttpRequest"
        },
        url,
        ...options
    }).then(response => response.data);
};

API.get = function (url, params) {
    return API._request(url, {
        method: "get",
        params
    });
};

API.put = function (url, data) {
    return API._request(url, {
        method: "put",
        data: { data }
    });
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

API.savePage = function (id, attributes) {
    return API.put(`/page/${id}`, attributes).then(API._nestIncluded).then(function (response) {
        // Remove regions as they wont be auto-populated
        delete response.data.attributes.regions;
        return response;
    });
};


API.saveContent = function (id, attributes) {
    return API.put(`/content/${id}`, attributes).then(API._nestIncluded);
};

export default API;
