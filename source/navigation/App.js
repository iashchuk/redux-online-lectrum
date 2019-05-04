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
import { socketActions } from "../bus/socket/actions";

// WebSocket
import { joinSocketChannel, socket } from "../init/socket";

class App extends Component {
    componentDidMount () {
        const { initializeAsync, listenConnection } = this.props;

        initializeAsync();
        listenConnection();
        joinSocketChannel();
    }

    componentWillUnmount () {
        socket.removeListener("connect");
        socket.removeListener("disconnect");
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? (
            <Private listenPosts = { listenPosts } />
        ) : (
            <Public />
        );
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
    ...socketActions,
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
