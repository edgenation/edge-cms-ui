import React from "react";


class TextInput extends React.Component {
    render() {
        return (
            <input className="form-control" type="text" {...this.props}/>
        );
    }
}


export default TextInput;
