import React from "react";
import PageForm from "../components/PageForm.jsx";
import ContentForm from "../components/ContentForm.jsx";
import T from "../constants/ACTION_TYPES";


class EditPage extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.state.page !== nextProps.state.page;
    }

    isLoading() {
        return this.props.state.page.get("isFetching");
    }

    render() {
        const id = this.props.state.page.getIn(["page", "id"]);
        const attributes = this.props.state.page.getIn(["page", "attributes"]);

        return (
            <div style={{ opacity: this.isLoading() ? 0.5 : 1 }}>
                <p>Page</p>
                {id &&
                    <div>
                        <PageForm action={T.PAGE} dispatch={this.props.dispatch} resource={this.props.state.page.get("page")} />

                        {attributes.get("regions").map((region, index) =>
                            <div key={region.get("id")} className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title" title={region.get("id")}>{region.getIn(["attributes","name"])}</h2>
                                </div>

                                <div className="panel-body">
                                    {region.getIn(["attributes", "content"]).map((content, index) =>
                                        <ContentForm key={content.get("id")} dispatch={this.props.dispatch} resource={content}/>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                }
            </div>
        )
    }
}


export default EditPage;
