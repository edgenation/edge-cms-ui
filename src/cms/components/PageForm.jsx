import React from "react";
import TextInput from "./TextInput.jsx";
import BaseForm from "./BaseForm.jsx";


class PageForm extends BaseForm {
    render() {
        const attributes = this.state.attributes;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextInput name="title" value={attributes.title} onChange={this.handleInputChange.bind(this)} autoComplete="off"/>
                <TextInput name="url" value={attributes.url} onChange={this.handleInputChange.bind(this)} autoComplete="off"/>
                <TextInput name="template" value={attributes.template} onChange={this.handleInputChange.bind(this)} autoComplete="off"/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}


export default PageForm;
