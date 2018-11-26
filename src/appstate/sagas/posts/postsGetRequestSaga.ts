import { call, throttle, put } from "redux-saga/effects"

import { postsGetSuccess, postsGetError, postsGetUpdate } from "../../actions/posts/postsActions"

import { getPosts } from "../../../services/dataService"

import { PostsTypes } from "../../types/postsTypes"

import { PostsGetRequestAction } from "../../actions/posts/__types/IActions"

export function* postsGetSaga(action: PostsGetRequestAction) {
	try {
		const response = yield call(getPosts, action.payload)

		const posts: ReadonlyArray<IPost> = response.data
		const postsCount: number = Number(response.headers["x-total-count"]) || 0

		if (action.payload.offset) {
			yield put(postsGetUpdate({ posts, postsCount }))
		} else {
			yield put(postsGetSuccess({ posts, postsCount }))
		}
	} catch (err) {
		yield put(postsGetError(err))
	}
}

export function* postsGetSagaWatcher() {
	yield throttle(500, PostsTypes.POSTS_GET_REQUEST, postsGetSaga)
}
