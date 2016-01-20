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
        data
    });
};

API.post = function (url, data) {
    return API._request(url, {
        method: "post",
        data: { data }
    });
};

API.delete = function (url, data) {
    return API._request(url, {
        method: "delete",
        data
    });
};


export default API;
