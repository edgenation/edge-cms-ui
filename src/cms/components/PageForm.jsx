import React from "react";
import TextInput from "./TextInput.jsx";
import BaseForm from "./BaseForm.jsx";


class PageForm extends BaseForm {
    render() {
        const attributes = this.state.attributes;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="page-title">Title</label>
                    <TextInput id="page-title" name="title" value={attributes.title} onChange={this.handleInputChange.bind(this)} autoComplete="off"/>
                </div>

                <div className="form-group">
                    <label htmlFor="page-url">Url</label>
                    <TextInput id="page-url" name="url" value={attributes.url} onChange={this.handleInputChange.bind(this)} autoComplete="off"/>
                </div>

                <div className="form-group">
                    <label htmlFor="page-template">Template</label>
                    <TextInput id="page-template" name="template" value={attributes.template} onChange={this.handleInputChange.bind(this)} autoComplete="off"/>
                </div>


                <button className="btn btn-default" type="submit">Submit</button>
            </form>
        );
    }
}


export default PageForm;
