import uniloc from "uniloc";


class Router {
    constructor() {
        this._routes = {};
        this._router = null;
    }

    /**
     * Add a route
     *
     * @param {string} name - The name of the route
     * @param {{route: Object, location: string}} route - The route object
     */
    addRoute(name, route) {
        this._routes[name] = route;
    }

    init() {
        let routes = Object.keys(this._routes).reduce((obj, name) => {
            obj[name] = this._routes[name].location;
            return obj;
        }, {});

        this._router = uniloc(routes);
    }

    /**
     * Get a route from a URL
     *
     * @param {string} uri - The uri to get the route for
     * @param {string} method - The route method, e.g. GET
     * @returns {*}
     */
    getRoute(uri, method) {
        var route = this.lookup(uri, method);
        route.route = this._routes[route.name].route;

        // TODO: Check for 404
        return route;
    }

    /**
     * Lookup the a route for a URL
     *
     * @param {string} uri - The uri to get the route for
     * @param {string} method - The route method, e.g. GET
     * @returns {{name, options}|null}
     */
    lookup(uri, method) {
        return this._router.lookup(uri, method);
    }

    /**
     * Generate a URL for a given route
     *
     * @param {string} name - The route name
     * @param {Object} options - The route params/query string
     * @returns {string}
     */
    generate(name, options) {
        return this._router.generate(name, options);
    }
}

export default new Router();
