import API from "./index";


export function listPages(page = 1, limit = 3) {
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
}


export function getPage(id) {
    return API.get(`/page/${id}`, {
        include: "regions.content"
    }).then(API._nestIncluded);
}


export function savePage(id, attributes) {
    return API.put(`/page/${id}`, attributes).then(API._nestIncluded).then(function (response) {
        // Remove regions as they wont be auto-populated
        delete response.data.attributes.regions;
        return response;
    });
}
