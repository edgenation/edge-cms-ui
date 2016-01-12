import { Map, fromJS } from "immutable";

export function cms(state = Map(), action = {}) {
    return state;
}


const INITIAL_NAVIGATION_STATE = Map({
    location: null
});

export function navigation(state = INITIAL_NAVIGATION_STATE, action = {}) {
    switch (action.type)
    {
        case "NAVIGATION/COMPLETE":
            return state.set("location", action.location);

        default:
            return state
    }
}


const INITIAL_PAGE_STATE = Map();

export function pages(state = INITIAL_PAGE_STATE, action = {}) {
    switch (action.type) {
        case "PAGES/FETCH":
            return state.merge({
                isFetching: true,
                page: action.page
            });

        case "PAGES/FETCHED":
            return Map({
                isFetching: false,
                items: fromJS(action.pages),
                page: action.page,
                lastUpdated: action.receivedAt
            });

        default:
            return state
    }
}
