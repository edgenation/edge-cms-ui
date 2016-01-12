import axios from "axios"


export function fetch(page = 0) {
    page = parseInt(page, 10) || 0;

    return [
        {
            type: "PAGES/FETCH",
            page: page
        },
        (dispatch, getState) => {
            axios.get("http://chrissheppard.herokuapp.com/api/page", { params: { offset: page, limit: 2 } })
                .then(function (response) {
                    dispatch(fetched(page, response.data));
                });
        }
    ];
}


export function fetched(page, response) {
    return {
        type: "PAGES/FETCHED",
        page: page,
        receivedAt: Date.now(),
        pages: response
    };
}
