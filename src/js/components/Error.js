import React from "react";
import { connect } from "react-redux";

import "../styles/error.css";

const mapStateToProps = state => {
	return { "error": state.error };
};

const ErrorMsg = ( {error} ) => (
	<div className="error">{error.msg}</div>
);

const Error = connect( mapStateToProps )( ErrorMsg );

export default Error;
