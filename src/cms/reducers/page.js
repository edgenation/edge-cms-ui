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

        case T.PAGE.FETCH_ERROR:
            return Map({
                isFetching: false,
                error: fromJS({id: action.id, ...action.error}),
                lastUpdated: action.receivedAt
            });

        case T.PAGE.UPDATE:
        case T.PAGE_CONTENT.CREATE:
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

        case T.PAGE_CONTENT.CREATE_SUCCESS:
            // Add the new content to our region
            return state.updateIn(["page", "attributes", "regions"], function (regions) {
                return regions.map(function (region) {
                    if (region.get("id") === action.id) {
                        return region.updateIn(["attributes", "content"], function (content) {
                            return content.push(fromJS(action.response.data));
                        })
                    }

                    return region;
                });
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
