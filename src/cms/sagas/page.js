import { take, put, call, fork } from "redux-saga";
import T from "../constants/ACTION_TYPES";
import * as PageAPI from "../core/api/page";
import { responseSuccess, responseError } from "../actions/api";


function *fetchPage(id) {
    try {
        const response = yield call(PageAPI.fetch, id);
        yield put(responseSuccess(T.PAGE.FETCH_SUCCESS, id, response));
    }
    catch(err) {
        yield put(responseError(T.PAGE.FETCH_ERROR, id, err.data));
    }
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
        yield put(responseSuccess(T.PAGE.UPDATE_SUCCESS, data.id, response));
    }
}
