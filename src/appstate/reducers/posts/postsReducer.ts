import { PostsTypes } from "../../types/postsTypes"

import {
	PostsActions,
	PostsGetSuccessAction,
	PostsGetErrorAction,
	PostsGetUpdateAction,
	PostsGetRequestAction
} from "../../actions/posts/__types/IActions"

import { API } from "../../../models/ApiState"

export const initialState: IPosts = {
	posts: [],
	orderBy: "",
	orderType: "asc",
	rowsPerPage: 0,
	page: 0,
	postsCount: 10,
	postsGetRequestState: API.NOT_REQUESTED,
	postsGetError: ""
}

export function postsReducer(state: IPosts = initialState, action: PostsActions): IPosts {
	switch (action.type) {
		case PostsTypes.POSTS_GET_REQUEST:
			const offset = (action as PostsGetRequestAction).payload.offset
			const limit = (action as PostsGetRequestAction).payload.limit

			return {
				...state,
				page: offset ? offset / limit : 0,
				orderBy: (action as PostsGetRequestAction).payload.orderBy || state.orderBy,
				orderType:
					state.orderBy === (action as PostsGetRequestAction).payload.orderBy && state.orderType === "desc"
						? "asc"
						: "desc",
				postsGetRequestState: API.REQUEST_PENDING
			}
		case PostsTypes.POSTS_GET_REQUEST_SUCCESS:
			return {
				...state,
				posts: [...(action as PostsGetSuccessAction).payload.posts],
				postsCount: (action as PostsGetSuccessAction).payload.postsCount,
				postsGetRequestState: API.REQUEST_SUCCESS
			}
		case PostsTypes.POSTS_GET_REQUEST_UPDATE:
			return {
				...state,
				posts: [...state.posts, ...(action as PostsGetUpdateAction).payload.posts],
				postsCount: (action as PostsGetUpdateAction).payload.postsCount,
				postsGetRequestState: API.REQUEST_SUCCESS
			}
		case PostsTypes.POSTS_GET_REQUEST_ERROR:
			return {
				...state,
				postsGetError: (action as PostsGetErrorAction).payload,
				postsGetRequestState: API.REQUEST_ERROR
			}
		case PostsTypes.POSTS_GET_REQUEST_STATE_RESET:
			return {
				...state,
				postsGetRequestState: API.NOT_REQUESTED
			}
		default:
			return state
	}
}
