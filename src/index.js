import CMS from "./cms";
import Router from "./cms/core/router";

import Dashboard from "./cms/containers/Dashboard.jsx"
import Pages from "./cms/containers/Pages.jsx"

// Add routes
Router.addRoute("dashboard", { route: Dashboard, location: "GET /" });
Router.addRoute("pages", { route: Pages, location: "GET /page" });
Router.init();

// Initialise the CMS
CMS();
