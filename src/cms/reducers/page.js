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
                lastUpdated: action.receivedAt
            });

        case T.PAGE.UPDATE:
        case T.PAGE_CONTENT.UPDATE:
            return state.merge({
                isFetching: true,
                id: action.id
            });

        case T.PAGE.UPDATE_SUCCESS:
            return state.mergeDeep({
                isFetching: false,
                page: fromJS(action.response.data),
                lastUpdated: action.receivedAt
            });

        case T.PAGE_CONTENT.UPDATE_SUCCESS:
            return state.updateIn(["page", "attributes", "regions"], function (regions) {
                let regionIndex = -1;
                let contentIndex = -1;
                regions.forEach(function (region, rIndex) {
                    let cIndex = region.getIn(["attributes", "content"]).findIndex(content => content.get("id") === action.id);

                    if (cIndex !== -1) {
                        contentIndex = cIndex;
                        regionIndex = rIndex;
                    }
                });

                if (regionIndex !== -1 && contentIndex !== -1) {
                    return regions.setIn([regionIndex, "attributes", "content", contentIndex], fromJS(action.response.data));
                }

                return regions;
            }).merge({
                isFetching: false,
                lastUpdated: action.receivedAt
            });

        default:
            return state
    }
}
