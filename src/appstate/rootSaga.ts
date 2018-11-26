import { all } from "redux-saga/effects"

import { loginRequestSagaWatcher } from "./sagas/auth/loginRequestSaga"

export function* rootSaga() {
	yield all([loginRequestSagaWatcher()])
}
