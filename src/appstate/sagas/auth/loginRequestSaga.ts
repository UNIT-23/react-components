import { takeLatest, put } from "redux-saga/effects"

import { loginSuccess, loginError } from "../../actions/auth/authActions"

import { AuthTypes } from "../../types/authTypes"

import { LoginRequestAction } from "../../actions/auth/__types/IActions"

export function* loginRequestSaga(action: LoginRequestAction) {
	try {
		yield put(
			loginSuccess({
				user: {
					id: "1",
					name: action.payload.email
				},
				authToken: "token"
			})
		)
	} catch (err) {
		yield put(loginError(err))
	}
}

export function* loginRequestSagaWatcher() {
	yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequestSaga)
}
