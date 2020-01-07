import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";
import { ERROR } from "../constants/errorTypes";
import { phrases } from "../phrases";

const initialState = {
	"articles": [],
	"error": {
		"msg": "",
		"type": ""
	},
	"remoteArticles": []
};

function rootReducer( state = initialState, action ) {
	console.log('action');
	console.log(action);

	if ( action.type === ERROR ) {
		console.log('ERROR');
		return Object.assign( {}, state, {
			"error": {
				"msg": phrases[ action.subType ],
				"type": action.subType
			}
		} );
	}
	else if ( action.type === ADD_ARTICLE ) {
		console.log("ADD_ARTICLE");
		// we are missing the id (or key), so lets add the array length as one
		action.payload.id = state.articles.length;
		return Object.assign( {}, state, {
			"articles": state.articles.concat( action.payload ),
			"error": {
				"msg": "",
				"type": ""
			}
		} );
	}
	else if ( action.type === DATA_LOADED ) {
		console.log( "DATA LOADED");
		return Object.assign( {}, state, {
			"remoteArticles": state.remoteArticles.concat( action.payload ),
			"error": {
				"msg": "",
				"type": ""
			}
		} );
	}

	return state;
}

export default rootReducer;
