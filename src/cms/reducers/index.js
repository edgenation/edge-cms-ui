import { combineReducers } from "redux";

import { navigation } from "./navigation";
import { pages } from "./pages";

export default combineReducers({
    navigation,
    pages
});
