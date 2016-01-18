import API from "../core/api"
import T from "../constants/ACTION_TYPES";
import { responseReceived } from "./api";


export function saveForm(action, actionType, id, attributes) {
    // TODO

    console.log("saveFormsaveFormsaveForm", action[actionType]);

    // TODO: This triggers a load of the page! :(
    return [
        { type: action[actionType], id, attributes }
    ];

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
