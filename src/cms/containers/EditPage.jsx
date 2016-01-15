import React from "react";
import PageForm from "../components/PageForm.jsx";


class Region extends React.Component {
    render() {
        const { id, attributes } = this.props;

        return (
            <p>Region[{attributes.get("name")}] = {id}</p>
        );
    }
}




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
                        <PageForm dispatch={this.props.dispatch} resource={this.props.state.page.get("page")} />

                        {attributes.get("regions").map((region, index) =>
                            <Region key={index} {...region.toObject()}/>
                        )}
                    </div>
                }
            </div>
        )
    }
}


export default EditPage;
