import T from "../constants/ACTION_TYPES";


export function updatePageContent(id, attributes) {
    return { type: T.PAGE_CONTENT.UPDATE, id, attributes }
}

export function createPageContent(attributes, regionId) {
    return { type: T.PAGE_CONTENT.CREATE, regionId, attributes };
}

export function deletePageContent(id) {
    return { type: T.PAGE_CONTENT.DELETE, id };
}
