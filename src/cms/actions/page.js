import T from "../constants/ACTION_TYPES";


export function fetchPage(id) {
    return { type: T.PAGE.FETCH, id };
}

export function updatePage(id, attributes) {
    let { regions, ...attrs } = attributes;

    return { type: T.PAGE.UPDATE, id, attrs };
}

export function createPage(attributes) {
    return { type: T.PAGE.CREATE, attributes };
}
