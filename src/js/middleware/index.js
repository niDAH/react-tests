import { ADD_ARTICLE } from "../constants/action-types";
import { ERROR, ERROR_FORBIDDEN_WORD } from "../constants/errorTypes";

const forbiddenWords = [ "spam", "money", "monster" ];

export function forbiddenWordsMiddleware({ dispatch }) {
	return function(next) {
		return function(action) {
			// all actions call this middleware, so it's import to make sure you type is what you want (expect)
			if ( action.type === ADD_ARTICLE ) {
				const foundWord = forbiddenWords.filter( word =>
					action.payload.title.includes(word)
				);

				if ( foundWord.length ) {
					return dispatch( {
						"subType": ERROR_FORBIDDEN_WORD,
						"type": ERROR
					} );
				}
			}
			return next(action);
		}
	}
}
