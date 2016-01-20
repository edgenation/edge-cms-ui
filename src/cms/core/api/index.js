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

API.delete = function (url, data) {
    return API._request(url, {
        method: "delete",
        data
    });
};


API.saveContent = function (id, attributes) {
    return API.put(`/content/${id}`, attributes).then(API._nestIncluded);
};

API.deleteContent = function (id) {
    return API.findRegionsForContent(id).then(function(regionIds) {
        // Remove the content from any region that has it
        let regionPromises = regionIds.map(regionId => API.delete(`/region/${regionId}/content`, { content: id }));

        return Promise.all(regionPromises).then(function () {
            // TODO: Delete the actual content
            return id;
        });
    });
};


// Find all the region id's which have this given content item
API.findRegionsForContent = function (id) {
    return API.get(`/region`, {
        limit: false,
        fields: "id",
        "filter[content]": id
    }).then((response) => response.data.map((data) => data.id));
};

export default API;
