import T from "../constants/ACTION_TYPES";


/**
 * An action to update a pages content item
 *
 * @param {string} id - The ID of the content to update
 * @param {Object} attributes - The updated attributes
 * @returns {{type: string, id: string, attributes: Object}}
 */
export function updatePageContent(id, attributes) {
    return { type: T.PAGE_CONTENT.UPDATE, id, attributes }
}

/**
 * An action to create a new page content item
 *
 * @param {Object} attributes - The new attributes
 * @param {string} regionId - The ID of the region this content belongs to
 * @returns {{type: string, regionId: string, attributes: Object}}
 */
export function createPageContent(attributes, regionId) {
    return { type: T.PAGE_CONTENT.CREATE, regionId, attributes };
}

/**
 * An action to delete a pages content item
 *
 * @param {string} id - The ID of the content to delete
 * @returns {{type: string, id: string}}
 */
export function deletePageContent(id) {
    return { type: T.PAGE_CONTENT.DELETE, id };
}
