import API from "../core/api"
import T from "../constants/ACTION_TYPES";


export function fetchPages(page = 1, limit = 3) {
    page = parseInt(page, 10) || 1;

    return [
        {
            type: T.PAGES.FETCH,
            page: page
        },
        (dispatch, getState) => {
            API.listPages(page, limit)
                .then(function (response) {
                    dispatch(pagesFetched(page, response));
                });
        }
    ];
}


export function pagesFetched(page, response) {
    return {
        type: T.PAGES.FETCHED,
        page: page,
        receivedAt: Date.now(),
        pages: response
    };
}
