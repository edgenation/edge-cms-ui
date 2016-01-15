import { fetchPage } from "../actions/page";


const INVALIDATE_TIME = 2000;

function shouldFetch(location, data) {
    let lastUpdated = data.get("lastUpdated");
    let dataId = data.getIn(["page", "id"]);
    let urlId = location.options.id;

    // Never fetched
    if (!lastUpdated) {
        return true;
    }

    // Different page
    if (dataId !== urlId) {
        return true;
    }

    //  Check for out of date or not
    return Date.now() > lastUpdated + INVALIDATE_TIME;
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
