import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


const INITIAL_PAGE_STATE = Map();

export function page(state = INITIAL_PAGE_STATE, action = {}) {
    switch (action.type) {
        case T.PAGE.UPDATE:
        case T.PAGE.FETCH:
            return state.merge({
                isFetching: true,
                id: action.id
            });

        case T.PAGE.FETCH_SUCCESS:
        case T.PAGE.UPDATE_SUCCESS:
            return Map({
                isFetching: false,
                page: fromJS(action.response.data),
                id: action.id,
                lastUpdated: action.receivedAt
            });

        default:
            return state
    }
}
