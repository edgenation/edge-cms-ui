import TextInput from "./TextInput.jsx";
import SelectInput from "./SelectInput.jsx";
import BaseForm from "./BaseForm.jsx";
import FormGroup from "./FormGroup.jsx";


class PageForm extends BaseForm {
    render() {
        let { id, attributes, errors } = this.state;

        attributes = attributes.toJS();

        // TODO: Get a list of templates from somewhere!
        const templates = ["default"];

        let hasErrors = Object.keys(errors).length;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title" title={id}>Page</h2>
                    </div>

                    <div className="panel-body">
                        <FormGroup error={errors.title}>
                            <label htmlFor="page-title">Title</label>
                            <TextInput id="page-title" name="title" value={attributes.title} onChange={this.handleInputChange.bind(this)} autoComplete="off" required />
                        </FormGroup>

                        <FormGroup error={errors.url}>
                            <label htmlFor="page-url">Url</label>
                            <TextInput id="page-url" name="url" value={attributes.url} onChange={this.handleInputChange.bind(this)} autoComplete="off" required />
                        </FormGroup>

                        <FormGroup error={errors.template}>
                            <label htmlFor="page-template">Template</label>
                            <SelectInput id="page-template" name="template" onChange={this.handleInputChange.bind(this)} value={attributes.template} options={templates} />
                        </FormGroup>
                    </div>

                    <div className="panel-footer">
                        <button className="btn btn-primary" type="submit" disabled={hasErrors}>
                            <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"/>
                            Submit
                        </button>
                    </div>
                </div>

            </form>
        );
    }
}


export default PageForm;
