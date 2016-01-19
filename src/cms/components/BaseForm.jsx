import React from "react";
import { saveForm } from "../actions/form";


class BaseForm extends React.Component {
    static propTypes = {
        action: React.PropTypes.object.isRequired,
        resource: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.resource.get("id"),
            attributes: this.props.resource.get("attributes").toJS(),
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.resource.get("id"),
            attributes: nextProps.resource.get("attributes").toJS(),
            errors: {}
        });
    }

    handleInputChange(e) {
        // Update the state with the new value
        this.setState(function (previousState) {
            let { name, value, required } = e.target;
            let attributes = previousState.attributes;
            let errors = previousState.errors;

            // Update attribute
            attributes[name] = value;

            // TODO: Validate and check errors
            if (required) {
                errors[name] = "BLUR!";
            }

            return { attributes, errors };
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { id, attributes, errors } = this.state;

        let hasErrors = Object.keys(errors).length;

        console.log("TODO: Submit form");
        console.log(this.state);

        // TODO: Check for errors
        if (hasErrors) {
            return;
        }

        let actionType = id ? "UPDATE" : "CREATE";  // Check if we are creating or updating
        this.props.dispatch(saveForm(this.props.action, actionType, id, attributes));

        return false;
    }
}


export default BaseForm;
