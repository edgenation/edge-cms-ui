import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


const INITIAL_PAGE_STATE = Map();

export function pages(state = INITIAL_PAGE_STATE, action = {}) {
    switch (action.type) {
        case T.PAGES.FETCH:
            return state.merge({
                isFetching: true,
                page: action.page
            });

        case T.PAGES.FETCHED:
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
