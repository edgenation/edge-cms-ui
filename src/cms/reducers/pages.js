import { Map, fromJS } from "immutable";


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
