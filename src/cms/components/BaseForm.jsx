import React from "react";


class BaseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.resource.get("id"),
            attributes: this.props.resource.get("attributes").toJS(),
            errors: {}
        };
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
        // TODO: Check if we are creating or updating

        // TODO: Get the action from props or something? T.PAGE.FETCH_SUCCESS
        //this.props.dispatch();
        // dispatch(formSaving(T.PAGE.FETCH_SUCCESS, id, attributes));
    }
}


export default BaseForm;
