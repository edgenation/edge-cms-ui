import { Map, fromJS } from "immutable";


const INITIAL_PAGE_STATE = Map();

export function page(state = INITIAL_PAGE_STATE, action = {}) {
    switch (action.type) {
        case "PAGE/FETCH":
            return state.merge({
                isFetching: true,
                id: action.id
            });

        case "PAGE/FETCHED":
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
