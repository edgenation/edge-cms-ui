import React from "react";

import ApplicationLayout from "./components/ApplicationLayout.jsx"
import Router from "./core/router"


class Application extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func.isRequired
    };

    render() {
        const location = this.props.state.navigation.get("location");
        const Route = location.route;

        return (
            <ApplicationLayout>
                <Route {...this.props} />
            </ApplicationLayout>
        )
    }
}


export default Application;
