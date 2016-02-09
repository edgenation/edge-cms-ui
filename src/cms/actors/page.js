import { fetchPage } from "../actions/page";


function shouldFetch(location, data) {
    let lastUpdated = data.get("lastUpdated");
    let errorId = data.getIn(["error", "id"]);
    let dataId = data.getIn(["page", "id"]);
    let urlId = location.options.id;

    // If request failed - dont try to re-load
    if (errorId && errorId === urlId) {
        return false;
    }

    // Never fetched
    if (!lastUpdated) {
        return true;
    }

    // Different page
    if (dataId !== urlId) {
        return true;
    }

    return false;
}


export default function page(state, dispatch) {
    // Get the current location
    const location = state.navigation.get("location");

    switch (location.name) {
        case "edit-page":
            if (shouldFetch(location, state.page)) {
                dispatch(fetchPage(location.options.id));
            }
        return;
    }
}
