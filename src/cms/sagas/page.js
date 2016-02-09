import { take, put, call, fork } from "redux-saga";
import T from "../constants/ACTION_TYPES";
import * as PageAPI from "../core/api/page";
import { responseReceived } from "../actions/api";


// TODO: Catch errors
//dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));

function *fetchPage(id) {
    const response = yield call(PageAPI.fetch, id);
    yield put(responseReceived(T.PAGE.FETCH_SUCCESS, id, response));
}

export function *watchFetchPage() {
    var data;
    while ((data = yield take(T.PAGE.FETCH))) {
        yield fork(fetchPage, data.id);
    }
}

export function *watchUpdatePage() {
    var data;

    while ((data = yield take(T.PAGE.UPDATE))) {
        let response = yield call(PageAPI.update, data.id, { attributes: data.attrs });
        yield put(responseReceived(T.PAGE.UPDATE_SUCCESS, data.id, response));
    }
}
