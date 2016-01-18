import React from "react";
import classNames from "classnames";


class FormGroup extends React.Component {
    render() {
        const { children, error } = this.props;

        let formGroupClass = classNames({
            "form-group": true,
            "has-error": error,
            "has-feedback": error
        });

        return (
            <div className={formGroupClass}>
                {children}

                {error &&
                    <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"/>
                }
            </div>
        );
    }
}


export default FormGroup;
