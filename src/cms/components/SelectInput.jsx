import React from "react";
import TextInput from "./TextInput.jsx";


class SelectInput extends React.Component {
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

SelectInput.defaultProps = {
    options: []
};


export default SelectInput;
