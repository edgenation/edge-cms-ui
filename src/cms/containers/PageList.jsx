import React from "react";


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

        return (
            <div>
                <p>Page List</p>

                {this.isLoading() &&
                    <p>Loading...</p>
                }

                {pages && pages.size &&
                    <p>Number of pages {pages.size}</p>
                }
            </div>
        )
    }
}


export default PageList;
