import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import { ERROR_FORBIDDEN_WORD } from "../constants/errorTypes";

import Error from "./Error";

import "../styles/Form.css";

class ConnectedForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"title": ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}
	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		const { title } = this.state;
		this.props.addArticle({ title });
		this.setState({ title: "" });
  	}
	render() {
		const { title } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				{ this.props.error.type === ERROR_FORBIDDEN_WORD ? <Error/> : "" }

				<div className="Form">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={this.handleChange}
					/>
					<button className="button" type="submit">SAVE</button>
				</div>
			</form>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		"error": state.error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		"addArticle": article => dispatch(addArticle(article))
	};
};

const Form = connect(
	mapStateToProps,
	mapDispatchToProps
)( ConnectedForm );

export default Form;
