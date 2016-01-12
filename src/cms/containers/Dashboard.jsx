import React from "react";
import Link from "../components/Link.jsx";


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>Dashboard</p>

                <Link name="pages">Pages</Link>
            </div>
        )
    }
}


export default Dashboard;
