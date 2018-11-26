import { PostsTypes } from "../../types/postsTypes"

import {
	IPostsRequestActionPayload,
	PostsGetSuccessAction,
	PostsGetErrorAction,
	IPostsSuccessPayload,
	PostsGetRequestAction,
	PostsStateResetAction,
	IPostsUpdatePayload,
	PostsGetUpdateAction
} from "./__types/IActions"

export function postsGetRequest(payload: IPostsRequestActionPayload): PostsGetRequestAction {
	return {
		payload,
		type: PostsTypes.POSTS_GET_REQUEST
	}
}

export function postsGetSuccess(payload: IPostsSuccessPayload): PostsGetSuccessAction {
	return {
		payload,
		type: PostsTypes.POSTS_GET_REQUEST_SUCCESS
	}
}

export function postsGetUpdate(payload: IPostsUpdatePayload): PostsGetUpdateAction {
	return {
		payload,
		type: PostsTypes.POSTS_GET_REQUEST_UPDATE
	}
}

export function postsGetError(payload: string): PostsGetErrorAction {
	return {
		payload,
		type: PostsTypes.POSTS_GET_REQUEST_ERROR
	}
}

export function postsGetStateReset(): PostsStateResetAction {
	return {
		type: PostsTypes.POSTS_GET_REQUEST_ERROR
	}
}
