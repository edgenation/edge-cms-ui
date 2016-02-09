import { take, put, call, fork } from "redux-saga";
import T from "../constants/ACTION_TYPES";
import * as PageAPI from "../core/api/page";
import { responseReceived } from "../actions/api";


// TODO: Catch errors
//dispatch(responseReceived(T.PAGE.UPDATE_ERROR, id, response));


function *fetchPages(page, limit) {
    const response = yield call(PageAPI.list, page, limit);
    yield put(responseReceived(T.PAGES.FETCH_SUCCESS, page, response));
}

export function *watchFetchPages() {
    var data;
    while ((data = yield take(T.PAGES.FETCH))) {
        yield fork(fetchPages, data.page, data.limit);
    }
}
