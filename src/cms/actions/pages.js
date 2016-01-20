import * as PageAPI from "../core/api/page";
import T from "../constants/ACTION_TYPES";
import { responseReceived } from "./api";


export function fetchPages(page = 1, limit = 3) {
    page = parseInt(page, 10) || 1;

    return [
        { type: T.PAGES.FETCH, page },
        (dispatch) => {
            PageAPI.list(page, limit)
                .then(function (response) {
                    dispatch(responseReceived(T.PAGES.FETCH_SUCCESS, page, response));
                });
            // TODO: Catch 404 etc
        }
    ];
}
