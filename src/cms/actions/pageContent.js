import * as PageContentAPI from "../core/api/pageContent";
import * as ContentAPI from "../core/api/content";
import T from "../constants/ACTION_TYPES";
import { responseReceived } from "./api";


export function updatePageContent(id, attributes) {
    return [
        { type: T.PAGE_CONTENT.UPDATE, id, attributes },
        (dispatch) => {
            ContentAPI.update(id, { attributes })
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
            PageContentAPI.create(regionId, attributes)
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
            PageContentAPI.remove(id)
                .then(function (response) {
                    dispatch(responseReceived(T.PAGE_CONTENT.DELETE_SUCCESS, id, response));
                });
            // TODO: Catch errors
            //dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));
        }
    ];
}
