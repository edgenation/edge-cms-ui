/**
 * An action representing the received API response
 *
 * @param {string} type - The action type
 * @param {string} id - The ID of the resource
 * @param {Object} response - The response object
 * @returns {{type: string, id: string, response: Object, receivedAt: number}}
 */
export function responseSuccess(type, id, response) {
    return { type, id, response, receivedAt: Date.now() };
}

export function responseError(type, id, error) {
    return { type, id, error, receivedAt: Date.now() };
}
