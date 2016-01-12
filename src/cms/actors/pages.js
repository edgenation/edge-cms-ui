import { fetch } from "../actions/pages";


function outOfDate(pages) {
    let lastUpdated = pages.get("lastUpdated");

    // TODO: Use time difference
    if (!lastUpdated) {
        return true;
    }

    return false
}


export default function fetchPages(state, dispatch) {
    // Get the current location
    const location = state.navigation.get("location");

    switch (location.name) {
        case "pages":
            //  Check for out of date or not
            if (outOfDate(state.pages)) {
                // TODO: Use page query string etc
                dispatch(fetch());
            }
        return;
    }
}
