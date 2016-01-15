import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


const INITIAL_PAGE_STATE = Map();

export function page(state = INITIAL_PAGE_STATE, action = {}) {
    switch (action.type) {
        case T.PAGE.FETCH:
            return state.merge({
                isFetching: true,
                id: action.id
            });

        case T.PAGE.FETCHED:
            return Map({
                isFetching: false,
                page: fromJS(action.page.data),
                id: action.id,
                lastUpdated: action.receivedAt
            });

        default:
            return state
    }
}
