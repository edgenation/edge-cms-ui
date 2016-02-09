import T from "../constants/ACTION_TYPES";


export function fetchPages(page = 1, limit = 3) {
    page = parseInt(page, 10) || 1;

    return { type: T.PAGES.FETCH, page, limit };
}
