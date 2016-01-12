import axios from "axios"


export function fetch(page = 0) {
    return (dispatch, getState) => {
        dispatch({
            type: "PAGES/FETCH",
            page: page
        });

        axios.get("http://chrissheppard.herokuapp.com/api/page", { params: { offset: page } })
            .then(function (response) {
                dispatch(fetched(page, response.data));
            });
    };
}


export function fetched(page, response) {
    return {
        type: "PAGES/FETCHED",
        page: page,
        receivedAt: Date.now(),
        pages: response
    };
}
