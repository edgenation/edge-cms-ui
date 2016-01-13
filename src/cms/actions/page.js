import API from "../core/api"


export function fetchPage(id) {
    return [
        {
            type: "PAGE/FETCH",
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
        type: "PAGE/FETCHED",
        id: id,
        receivedAt: Date.now(),
        page: response
    };
}
