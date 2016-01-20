import TextInput from "./TextInput.jsx";
import SelectInput from "./SelectInput.jsx";
import BaseForm from "./BaseForm.jsx";
import FormGroup from "./FormGroup.jsx";


class ContentForm extends BaseForm {
    render() {
        let { id, attributes, errors } = this.state;
        attributes = attributes.toJS();

        // TODO: Get a list of content types from somewhere!
        const contentTypes = ["", "markdown", "html", "image"];

        let hasErrors = Object.keys(errors).length;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h2 className="panel-title" title={id}>Content</h2>
                        TODO: Reorder?
                    </div>

                    <div className="panel-body">
                        <FormGroup error={errors.type}>
                            <label htmlFor={`content-type-${id}`}>Type</label>
                            <SelectInput id={`content-type-${id}`} name="type" onChange={this.handleInputChange.bind(this)} value={attributes.type} options={contentTypes} required />
                        </FormGroup>

                        {attributes.type === "markdown" &&
                            <FormGroup error={errors.type}>
                                <label htmlFor={`content-markdown-${id}`}>Markdown</label>
                                <textarea className="form-control" id={`content-markdown-${id}`} name="data.markdown" value={attributes.data.markdown} onChange={this.handleInputChange.bind(this)} required />
                            </FormGroup>
                        }

                        {attributes.type === "html" &&
                            <FormGroup error={errors.type}>
                                <label htmlFor={`content-html-${id}`}>HTML</label>
                                <textarea className="form-control" id={`content-html-${id}`} name="data.html" value={attributes.data.html} onChange={this.handleInputChange.bind(this)} required />
                            </FormGroup>
                        }

                        {attributes.type === "image" &&
                            <FormGroup error={errors.type}>
                                <label htmlFor={`content-src-${id}`}>Src</label>
                                <TextInput id={`content-src-${id}`} name="data.src" value={attributes.data.src} onChange={this.handleInputChange.bind(this)} autoComplete="off" required />
                            </FormGroup>
                        }

                        {attributes.type === "image" &&
                            <FormGroup error={errors.type}>
                                <label htmlFor={`content-alt-${id}`}>Alt</label>
                                <TextInput id={`content-alt-${id}`} name="data.alt" value={attributes.data.alt} onChange={this.handleInputChange.bind(this)} autoComplete="off" />
                            </FormGroup>
                        }
                    </div>

                    <div className="panel-footer">
                        <button className="btn btn-primary" type="submit" disabled={hasErrors}>
                            <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"/>
                            Submit
                        </button>

                        {id &&
                            <button className="btn btn-danger" type="button" onClick={this.handleDelete.bind(this)}>
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
                                Delete
                            </button>
                        }
                    </div>

                </div>
            </form>
        );
    }
}


export default ContentForm;
