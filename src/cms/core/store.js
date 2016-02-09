import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import multi from "redux-multi";
import startupSagas from "../sagas";

export const sagaMiddleware = createSagaMiddleware(...startupSagas);

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, multi, sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(reducer) {
    return createStoreWithMiddleware(reducer);
}
