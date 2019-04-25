// Core
import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

// Routes
import Public from "./Public";
import Private from "./Private";

// Actions
import { authActions } from "../bus/auth/actions";

class App extends Component {
    componentDidMount () {
        this.props.authenticateAsync();
    }

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

const mapDispatchToProps = {
    authenticateAsync: authActions.authenticateAsync,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
