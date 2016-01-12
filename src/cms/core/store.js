import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function makeStore(reducers) {
    const reducer = combineReducers(reducers);

    return createStoreWithMiddleware(reducer);
}
