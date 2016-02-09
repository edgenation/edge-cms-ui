import T from "../constants/ACTION_TYPES";

/**
 * An action to fetch a page by ID
 *
 * @param {string} id - The ID of the page to fetch
 * @returns {{type: string, id: string}}
 */
export function fetchPage(id) {
    return { type: T.PAGE.FETCH, id };
}

/**
 * An action to update a page
 *
 * @param {string} id - The ID of the page to update
 * @param {Object} attributes - The updated attributes
 * @returns {{type: string, id: string, attrs: Object}}
 */
export function updatePage(id, attributes) {
    let { regions, ...attrs } = attributes;

    return { type: T.PAGE.UPDATE, id, attrs };
}

/**
 * An action to create a new page
 *
 * @param {Object} attributes - The new attributes
 * @returns {{type: string, attributes: Object}}
 */
export function createPage(attributes) {
    return { type: T.PAGE.CREATE, attributes };
}
