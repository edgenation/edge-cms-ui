import API from "./index";
import * as ContentAPI from "./content";


// Find all the region id's which have this given content item
function findRegionsForContent(id) {
    return API.get("/region", {
        limit: false,
        fields: "id",
        "filter[content]": id
    }).then((response) => response.data.map((data) => data.id));
}


export function remove(id) {
    return findRegionsForContent(id).then(function (regionIds) {
        // Remove the content from any region that has it
        let regionPromises = regionIds.map(regionId => API.delete(`/region/${regionId}/content`, { content: id }));

        return Promise.all(regionPromises).then(function () {
            // TODO: Delete the actual content
            return ContentAPI.remove(id);
        });
    });
}


export function create(regionId, attributes) {
    return API.post("/content", { attributes }).then(function (response) {
        // Now link to the region!
        return API.put(`/region/${regionId}/content`, { content: response.data.id });
    });
}
