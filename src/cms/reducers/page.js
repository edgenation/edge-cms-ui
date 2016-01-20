import { Map, fromJS } from "immutable";
import T from "../constants/ACTION_TYPES";


const INITIAL_PAGE_STATE = Map();


function updatePageRegionContents(state, fn) {
    return state.updateIn(["page", "attributes", "regions"], function (regions) {
        return regions.map(region => region.updateIn(["attributes", "content"], fn));
    });
}


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
        case T.PAGE_CONTENT.DELETE:
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
            // Update any page regions that have this content in them
            return updatePageRegionContents(state, function (contents) {
                let index = contents.findIndex(content => content.get("id") === action.id);

                if (index !== -1) {
                    return contents.set(index, fromJS(action.response.data));
                }
                return contents;
            }).merge({
                isFetching: false,
                lastUpdated: action.receivedAt
            });

        case T.PAGE_CONTENT.DELETE_SUCCESS:
            // Remove the content from page regions if they have it
            return updatePageRegionContents(state, function (contents) {
                return contents.filter(content => content.get("id") !== action.id);
            }).merge({
                isFetching: false,
                lastUpdated: action.receivedAt
            });

        default:
            return state;
    }
}
