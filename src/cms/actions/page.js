import API from "../core/api"
import T from "../constants/ACTION_TYPES";
import { responseReceived } from "./api";


export function fetchPage(id) {
    return [
        { type: T.PAGE.FETCH, id },
        (dispatch) => {
            API.getPage(id)
                .then(function (response) {
                    dispatch(responseReceived(T.PAGE.FETCH_SUCCESS, id, response));
                });
            // TODO: Catch 404 etc
        }
    ];
}

export function updatePage(id, attributes) {

    let { regions, ...attrs } = attributes;

    return [
        { type: T.PAGE.UPDATE, id, attrs },
        (dispatch) => {
            API.savePage(id, { attributes: attrs })
                .then(function (response) {
                    dispatch(responseReceived(T.PAGE.UPDATE_SUCCESS, id, response));
                });
            // TODO: Catch errors
            //dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));
        }
    ];
}

export function createPage(attributes) {

}
