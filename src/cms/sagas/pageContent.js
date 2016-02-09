import { take, put, call } from "redux-saga";
import T from "../constants/ACTION_TYPES";
import * as ContentAPI from "../core/api/content";
import * as PageContentAPI from "../core/api/pageContent";
import { responseReceived } from "../actions/api";


export function *watchUpdatePageContent() {
    var data;

    while ((data = yield take(T.PAGE_CONTENT.UPDATE))) {
        let response = yield call(ContentAPI.update, data.id, data.attributes);
        yield put(responseReceived(T.PAGE_CONTENT.UPDATE_SUCCESS, data.id, response));
    }
}

export function *watchCreatePageContent() {
    var data;

    while ((data = yield take(T.PAGE_CONTENT.CREATE))) {
        let response = yield call(PageContentAPI.create, data.regionId, data.attributes);
        yield put(responseReceived(T.PAGE_CONTENT.CREATE_SUCCESS, data.regionId, response));
    }
}

export function *watchDeletePageContent() {
    var data;

    while ((data = yield take(T.PAGE_CONTENT.DELETE))) {
        let response = yield call(PageContentAPI.remove, data.id);
        yield put(responseReceived(T.PAGE_CONTENT.DELETE_SUCCESS, data.id, response));
    }
}
