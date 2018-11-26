import { all } from "redux-saga/effects"

import { postsGetSagaWatcher } from "./sagas/posts/postsGetRequestSaga"

export function* rootSaga() {
	yield all([postsGetSagaWatcher()])
}
