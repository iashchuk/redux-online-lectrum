// Core
import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from "../pages";

// Instruments
import { book } from "./book";

class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        ) : (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get("isAuthenticated"),
    };
};

export default withRouter(connect(mapStateToProps)(App));
