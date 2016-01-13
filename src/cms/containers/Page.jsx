import React from "react";


class Page extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.state.page !== nextProps.state.page;
    }

    isLoading() {
        return this.props.state.page.get("isFetching");
    }

    render() {
        const page = this.props.state.page.get("page");

        return (
            <div style={{ opacity: this.isLoading() ? 0.5 : 1 }}>
                <p>Page</p>
                {page &&
                    <div>
                        <p>{page.get("id")}</p>
                        <p>{page.getIn(["attributes", "title"])}</p>
                    </div>
                }
            </div>
        )
    }
}


export default Page;
