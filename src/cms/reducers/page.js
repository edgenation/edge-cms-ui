import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


const INITIAL_PAGE_STATE = Map();

export function page(state = INITIAL_PAGE_STATE, action = {}) {
    switch (action.type) {
        case T.PAGE.FETCH:
            return state.merge({
                isFetching: true,
                id: action.id,
                page: null
            });

        case T.PAGE.FETCH_SUCCESS:
            return Map({
                //isInValidated: true,
                isFetching: false,
                page: fromJS(action.response.data),
                id: action.id,
                lastUpdated: action.receivedAt
            });

        case T.PAGE.UPDATE:
            return state.merge({
                isFetching: true,
                id: action.id
            });

        case T.PAGE.UPDATE_SUCCESS:
            return state.mergeDeep({
                isFetching: false,
                page: fromJS(action.response.data),
                id: action.id,
                lastUpdated: action.receivedAt
            });

        default:
            return state
    }
}
