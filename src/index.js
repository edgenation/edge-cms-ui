import * as reducers from "./cms/reducers";
import makeStore from "./cms/core/store";
import Router from "./cms/core/router";
import actors from "./cms/actors";
import { navigationComplete } from "./cms/actions/navigation";


import CmsDashboard from "./cms/containers/Dashboard.jsx"
import CmsPageList from "./cms/containers/PageList.jsx"

// Add routes
Router.addRoute("dashboard", { route: CmsDashboard, location: "GET /" });
Router.addRoute("pages", { route: CmsPageList, location: "GET /page" });
Router.init();


const store = makeStore(reducers);

// Handle changes to our store with a list of actor functions, but ensure
// that the actor sequence cannot be started by a dispatch from an actor
let acting = false;
store.subscribe(function () {
    if (!acting) {
        acting = true;

        for (let actor of actors) {
            actor(store.getState(), store.dispatch);
        }

        acting = false;
    }
});


function onHashChange() {
    // Do something appropriate with `window.location.hash`
    //console.log(window.location.hash);
    store.dispatch(navigationComplete());
}

// Handle browser navigation events
window.addEventListener("hashchange", onHashChange, false);

// Trigger initial render
onHashChange();
