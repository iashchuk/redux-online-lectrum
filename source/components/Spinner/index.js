// Core
import React, { Component } from "react";
import { connect } from "react-redux";

// Instruments
import Styles from "./styles.m.css";

class Spinner extends Component {
    render () {
        const { isFetching } = this.props;

        return isFetching ? <div className = { Styles.spinner } /> : null;
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ui.get("isFetching"),
    };
};

export default connect(mapStateToProps)(Spinner);
