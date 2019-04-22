// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from "../pages";

// Instruments
import { book } from "./book";

class App extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}

export default hot(module)(App);
