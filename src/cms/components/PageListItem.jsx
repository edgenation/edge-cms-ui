import React from "react";


class PageListItem extends React.Component {
    render() {
        return (
            <div>
                <span className="badge pull-right">{this.props.attributes.url}</span>
                <h4 className="list-group-item-heading">{this.props.attributes.title}</h4>
            </div>
        )
    }
}


export default PageListItem;
