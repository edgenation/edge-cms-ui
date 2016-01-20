import API from "../core/api"
import T from "../constants/ACTION_TYPES";
import { responseReceived } from "./api";


export function updatePageContent(id, attributes) {
    return [
        { type: T.PAGE_CONTENT.UPDATE, id, attributes },
        (dispatch) => {
            API.saveContent(id, { attributes })
                .then(function (response) {
                    dispatch(responseReceived(T.PAGE_CONTENT.UPDATE_SUCCESS, id, response));
                });
            // TODO: Catch errors
            //dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));
        }
    ];
}

export function createPageContent(attributes, regionId) {
    return [
        { type: T.PAGE_CONTENT.CREATE, regionId, attributes },
        (dispatch) => {
            API.createContent(regionId, attributes)
                .then(function (response) {
                    dispatch(responseReceived(T.PAGE_CONTENT.CREATE_SUCCESS, regionId, response));
                });
            // TODO: Catch errors
            //dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));
        }
    ];
}


export function deletePageContent(id) {
    return [
        { type: T.PAGE_CONTENT.DELETE, id },
        (dispatch) => {
            API.deleteContent(id)
                .then(function (response) {
                    dispatch(responseReceived(T.PAGE_CONTENT.DELETE_SUCCESS, id, response));
                });
            // TODO: Catch errors
            //dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));
        }
    ];
}
