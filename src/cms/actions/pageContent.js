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

export function createPageContent(attributes) {
    // TODO: Create page content!
}


export function deletePageContent(id) {
    // TODO: Delete page content!
    console.log("deletePageContent", id);

    // TODO: Remove all references to it!
}
