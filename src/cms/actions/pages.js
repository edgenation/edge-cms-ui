import T from "../constants/ACTION_TYPES";


/**
 * An action to fetch a list of pages
 *
 * @param {number} [page=1] - The page number to fetch
 * @param {number} [limit=3] - The number if items per page
 * @returns {{type: string, page: number, limit: number}}
 */
export function fetchPages(page = 1, limit = 3) {
    page = parseInt(page, 10) || 1;

    return { type: T.PAGES.FETCH, page, limit };
}
