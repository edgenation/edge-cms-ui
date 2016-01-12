import { fetch } from "../actions/pages";


const INVALIDATE_TIME = 2000;

function shouldFetch(location, data) {
    let lastUpdated = data.get("lastUpdated");
    let dataPage = data.getIn(["items", "meta", "page", "page"], 1);
    let urlPage = parseInt(location.options.page, 10) || 1;

    // Never fetched
    if (!lastUpdated) {
        return true;
    }

    // Different page
    if (dataPage !== urlPage) {
        return true;
    }

    //  Check for out of date or not
    return Date.now() > lastUpdated + INVALIDATE_TIME;
}


export default function fetchPages(state, dispatch) {
    // Get the current location
    const location = state.navigation.get("location");

    switch (location.name) {
        case "pages":
            if (shouldFetch(location, state.pages)) {
                dispatch(fetch(location.options.page));
            }
        return;
    }
}
