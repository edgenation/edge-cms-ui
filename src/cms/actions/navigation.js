import Router from "../core/router";
import T from "../constants/ACTION_TYPES";


/**
 * The action to be called when the browser navigates
 *
 * @returns {{type: string, location: Object}}
 */
export function navigationComplete() {
    const currentURI = window.location.hash.substr(1);
    const route = Router.getRoute(currentURI);

    return {
        type: T.NAVIGATION.COMPLETE,
        location: route
    };
}
