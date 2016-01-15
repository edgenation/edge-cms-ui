import React from "react";


class BaseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.resource.get("id"),
            attributes: this.props.resource.get("attributes").toJS()
        };
    }

    handleInputChange(e) {
        // Update the state with the new value
        this.setState(function (previousState) {
            let attributes = previousState.attributes;
            attributes[e.target.name] = e.target.value;
            return { attributes: attributes };
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("TODO: Submit form");

        // TODO: Check if the attributes are empty (empty form)
        // TODO: Check if we are creating or updating
        // todo: this.props.dispatch
    }
}


export default BaseForm;
