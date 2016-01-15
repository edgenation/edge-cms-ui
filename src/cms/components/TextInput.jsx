import React from "react";


class TextInput extends React.Component {
    render() {
        return (
            <input type="text" {...this.props}/>
        );
    }
}


export default TextInput;
