import { combineReducers } from "redux";

import { navigation } from "./navigation";
import { pages } from "./pages";
import { page } from "./page";

export default combineReducers({
    navigation,
    pages,
    page
});
