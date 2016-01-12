class Router {
    constructor() {
        this._routes = {};
        this._router = null;
    }

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

    getRoute(uri, method) {
        var route = this.lookup(uri, method);
        route.route = this._routes[route.name].route;

        // TODO: Check for 404
        return route;
    }

    lookup(uri, method) {
        return this._router.lookup(uri, method);
    }

    generate(name, options) {
        return this._router.generate(name, options);
    }
}

export default new Router();
