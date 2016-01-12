import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import multi from "redux-multi";

const createStoreWithMiddleware = applyMiddleware(thunk, multi)(createStore);

export default function makeStore(reducers) {
    const reducer = combineReducers(reducers);

    return createStoreWithMiddleware(reducer);
}
