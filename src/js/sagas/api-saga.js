import { DATA_REQUESTED, DATA_LOADED } from "../constants/action-types";
import { ERROR, ERROR_API } from "../constants/errorTypes";

import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
	yield takeEvery( DATA_REQUESTED, workerSaga );
}

function* workerSaga() {
	try {
		const payload = yield call(getData);
		yield put( {"type": DATA_LOADED, payload} );
	}
	catch(e) {
		yield put( {
			"subType": ERROR_API,
			"type": ERROR,
			"payload": e
		} );
	}
}

function getData() {
	return fetch( "https://jsonplaceholder.typicode.com/posts" )
		.then( response => response.json() );
}
