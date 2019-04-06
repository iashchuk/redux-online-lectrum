// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";

// Pages
import { Feed } from "../pages";

class App extends Component {
    render () {
        return (
            <>
                <Feed />
            </>
        );
    }
}

export default hot(module)(App);
