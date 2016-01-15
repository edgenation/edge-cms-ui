import API from "../core/api"
import T from "../constants/ACTION_TYPES";


export function fetchPage(id) {
    return [
        {
            type: T.PAGE.FETCH,
            id: id
        },
        (dispatch, getState) => {
            API.getPage(id)
                .then(function (response) {
                    dispatch(pageFetched(id, response));
                });
        }
    ];
}


export function pageFetched(id, response) {
    return {
        type: T.PAGE.FETCHED,
        id: id,
        receivedAt: Date.now(),
        page: response
    };
}
