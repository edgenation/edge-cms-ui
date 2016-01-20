import React from "react";


class BaseForm extends React.Component {
    static propTypes = {
        resource: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func.isRequired,
        updater: React.PropTypes.func,
        creator: React.PropTypes.func,
        deleter: React.PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.resource.get("id"),
            attributes: this.props.resource.get("attributes"),
            errors: {}
        };
    }

    //componentWillReceiveProps(nextProps) {
    //    this.setState({
    //        id: nextProps.resource.get("id"),
    //        attributes: nextProps.resource.get("attributes"),
    //        errors: {}
    //    });
    //}

    handleInputChange(e) {
        // Update the state with the new value
        this.setState(function (previousState) {
            let { name, value, required } = e.target;
            let attributes = previousState.attributes;
            let errors = previousState.errors;

            // Update attribute
            attributes = attributes.set(name, value);

            // TODO: Validate and check errors
            if (required) {
                //errors[name] = "BLUR!";
            }

            return { attributes, errors };
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { id, attributes, errors } = this.state;

        let hasErrors = Object.keys(errors).length;

        // TODO: Check for errors
        if (hasErrors) {
            return;
        }

        if (id) {
            this.props.dispatch(this.props.updater(id, attributes.toJS()));
        } else {
            this.props.dispatch(this.props.creator(id, attributes.toJS()));
        }
    }

    handleDelete(e) {
        e.preventDefault();
        // TODO: Ask for confirmation?
        this.props.dispatch(this.props.deleter(this.state.id));
    }
}


export default BaseForm;
