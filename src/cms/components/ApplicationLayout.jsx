import React from "react";


class ApplicationLayout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-3 col-md-2">
                        Title
                    </div>

                    <main className="col-sm-9 col-md-10">
                        {children}
                    </main>
                </div>

            </div>
        )
    }
}


export default ApplicationLayout;
