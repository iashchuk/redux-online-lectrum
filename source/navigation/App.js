// Core
import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

// Routes
import Public from "./Public";
import Private from "./Private";

class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? <Private /> : <Public />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get("isAuthenticated"),
    };
};

export default withRouter(connect(mapStateToProps)(App));
