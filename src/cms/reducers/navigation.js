import { Map } from "immutable";
import T from "../constants/ACTION_TYPES";


const INITIAL_NAVIGATION_STATE = Map({
    location: null
});

export function navigation(state = INITIAL_NAVIGATION_STATE, action = {}) {
    switch (action.type) {
        case T.NAVIGATION.COMPLETE:
            return state.set("location", action.location);

        default:
            return state
    }
}
