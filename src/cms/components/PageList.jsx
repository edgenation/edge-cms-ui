import React from "react";
import Link from "./Link.jsx";
import PageListItem from "./PageListItem.jsx";


class PageList extends React.Component {
    render() {
        const pages = this.props.pages;

        return (
            <div className="list-group">
                {pages.toJS().map(page =>
                    <Link name="edit-page" options={{id: page.id}} className="list-group-item" key={page.id}>
                        <PageListItem {...page}/>
                    </Link>
                )}
            </div>
        )
    }
}


export default PageList;
