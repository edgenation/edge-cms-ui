import { take, put, call, fork } from "redux-saga";
import T from "../constants/ACTION_TYPES";
import * as PageAPI from "../core/api/page";
import { responseSuccess } from "../actions/api";


// TODO: Catch errors
//dispatch(responseSuccess(T.PAGE.UPDATE_ERROR, id, response));


function *fetchPages(page, limit) {
    const response = yield call(PageAPI.list, page, limit);
    yield put(responseSuccess(T.PAGES.FETCH_SUCCESS, page, response));
}

export function *watchFetchPages() {
    var data;
    while ((data = yield take(T.PAGES.FETCH))) {
        yield fork(fetchPages, data.page, data.limit);
    }
}
