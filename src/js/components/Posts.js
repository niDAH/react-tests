import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { ERROR_API } from "../constants/errorTypes";

import Error from "./Error";

export class Post extends Component {
	componentDidMount() {
		this.props.getData()
	}

	render() {
		return (
			<>
				{ this.props.error.type === ERROR_API ? <Error/> : "" }
				<ul>
					{this.props.articles.map( el => (
						<li key={el.id}>{el.title}</li> // in list or tab data sets, you need a key to allow react to keep track of each item
					))}
				</ul>
			</>
		)
	};
}

const mapStateToProps = (state) => {
	return {
		"articles": state.remoteArticles.slice( 0, 100 ),
		"error": state.error
	};
};

export default connect(
	mapStateToProps,
	{ getData } // comes from actions/index.js
)( Post );
