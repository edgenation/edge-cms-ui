import axios from "axios"


export function fetch(page = 1, limit = 3) {
    page = parseInt(page, 10) || 1;

    let offset = (page - 1) * limit;

    return [
        {
            type: "PAGES/FETCH",
            page: page
        },
        (dispatch, getState) => {
            axios.get("http://chrissheppard.herokuapp.com/api/page", { params: { offset, limit } })
                .then(function (response) {
                    let pagination = response.data.meta.page;

                    pagination.page = Math.floor(pagination.offset / pagination.limit) + 1 || 1;
                    pagination.pages = Math.ceil(pagination.total / pagination.limit);

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
