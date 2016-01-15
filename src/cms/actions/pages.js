import API from "../core/api"
import T from "../constants/ACTION_TYPES";
import { responseReceived } from "./api";


export function fetchPages(page = 1, limit = 3) {
    page = parseInt(page, 10) || 1;

    return [
        { type: T.PAGES.FETCH, page },
        (dispatch) => {
            API.listPages(page, limit)
                .then(function (response) {
                    dispatch(responseReceived(T.PAGES.FETCH_SUCCESS, page, response));
                });
            // TODO: Catch 404 etc
        }
    ];
}
