import React from "react";
import Routes from "../core/router";


class Link extends React.Component {
    render() {
        const { name, options, children } = this.props;

        return (
            <a {...this.props} href={"#" + Routes.generate(name, options)}>{children}</a>
        )
    }
}


export default Link;
