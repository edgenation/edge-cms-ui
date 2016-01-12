import Router from "../core/router";


// The action to be called when the browser navigates
export function navigationComplete() {
    const currentURI = window.location.hash.substr(1);
    const route = Router.getRoute(currentURI);

    console.log("navigationComplete", route.name);

    return {
        type: "NAVIGATION/COMPLETE",
        location: route
    };

}

// Change the url via code
export function start(name, options) {
    // TODO:
    return (dispatch, getState) => {
        //const currentURI = window.location.hash.substr(1);
        //const route = Router.getRoute(currentURI);
        //const newURI = Router.generate(name, options)

    };
}
