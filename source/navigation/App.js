// Core
import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

// Routes
import Public from "./Public";
import Private from "./Private";

// Components
import { Loading } from "../components";

// Actions
import { authActions } from "../bus/auth/actions";

// WebSocket
import { joinSocketChannel } from "../init/socket";

class App extends Component {
    componentDidMount () {
        this.props.initializeAsync();
        joinSocketChannel();
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private /> : <Public />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get("isAuthenticated"),
        isInitialized:   state.auth.get("isInitialized"),
    };
};

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
