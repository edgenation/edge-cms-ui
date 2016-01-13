import React from "react";
import Link from "./Link.jsx";
import PageListItem from "./PageListItem.jsx";


class PageList extends React.Component {
    render() {
        const pages = this.props.pages;

        return (
            <div className="list-group">
                {pages.toJS().map((page, index) =>
                    <Link name="page" options={{id: page.id}} className="list-group-item" key={index}>
                        <PageListItem {...page}/>
                    </Link>
                )}
            </div>
        )
    }
}


export default PageList;
