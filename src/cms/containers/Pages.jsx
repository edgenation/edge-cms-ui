import React from "react";
import PageList from "../components/PageList.jsx";
import Pagination from "../components/Pagination.jsx";


class Pages extends React.Component {
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
                    <PageList pages={pages}/>
                }

                {pagination &&
                    <Pagination name="pages" pagination={pagination} />
                }
            </div>
        )
    }
}


export default Pages;
