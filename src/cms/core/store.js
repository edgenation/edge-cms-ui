import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import multi from "redux-multi";

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, multi),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function makeStore(reducer) {
    return createStoreWithMiddleware(reducer);
}
