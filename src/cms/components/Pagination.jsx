import React from "react";
import classNames from "classnames";
import ImmutablePropTypes from "react-immutable-proptypes";
import Link from "./Link.jsx";


class Pagination extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        pagination: ImmutablePropTypes.map.isRequired
    };

    renderLinks() {
        let isCurrent = (index) => this.props.pagination.get("page") === index + 1;

        return Array(this.props.pagination.get("pages")).fill(1).map((page, index) =>
            <li key={index} className={classNames({active: isCurrent(index)})}>
                {isCurrent(index) &&
                    <span>{index + 1}</span>
                }
                {!isCurrent(index) &&
                    <Link name={this.props.name} options={{page: index + 1}}>{index + 1}</Link>
                }
            </li>
        );
    }

    renderPreviousLink() {
        if (this.props.pagination.get("page") > 1) {
            let prevPage = this.props.pagination.get("page") - 1;

            return (
                <li>
                    <Link name={this.props.name} options={{page: prevPage}} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
            );
        } else {
            return (
                <li className="disabled">
                    <span><span aria-hidden="true">&laquo;</span></span>
                </li>
            )
        }
    }

    renderNextLink() {
        if (this.props.pagination.get("page") < this.props.pagination.get("pages")) {
            let nextPage = this.props.pagination.get("page") + 1;

            return (
                <li>
                    <Link name={this.props.name} options={{page: nextPage}} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            );
        } else {
            return (
                <li className="disabled">
                    <span><span aria-hidden="true">&raquo;</span></span>
                </li>
            )
        }
    }

    render() {
        return (
            <nav className="text-center">
                <ul className="pagination">
                    {this.renderPreviousLink()}
                    {this.renderLinks()}
                    {this.renderNextLink()}
                </ul>
            </nav>
        )
    }
}


export default Pagination;
