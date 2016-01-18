import React from "react";
import TextInput from "./TextInput.jsx";


class SelectInput extends React.Component {
    static defaultProps = {
        options: []
    };

    render() {
        let { options, ...props } = this.props;

        return (
            <select className="form-control" {...props}>
                {options.map((option, index) =>
                    <option key={index} value={option}>{option}</option>
                )}
            </select>
        );
    }
}


export default SelectInput;
