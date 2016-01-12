import React from "react";
import Pagination from "../components/Pagination.jsx";


class PageList extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.state.pages !== nextProps.state.pages;
    }

    isLoading() {
        return this.props.state.pages.get("isFetching");
    }

    render() {
        const data = this.props.state.pages;
        const pages = data.getIn(["items", "data"]);
        const pagination = data.getIn(["items", "meta", "page"]);

        return (
            <div style={{ opacity: this.isLoading() ? 0.5 : 1 }}>
                <p>Page List</p>

                {pages && pages.size &&
                    <p>Number of items for this page {pages.size}</p>
                }

                {pagination &&
                    <Pagination name="pages" pagination={pagination} current={data.get("page")}/>
                }
            </div>
        )
    }
}


export default PageList;
