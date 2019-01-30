import { PostsTypes } from "../../../types/postsTypes"

export interface IPostsRequestActionPayload extends Partial<IPosts> {}
export type PostsGetRequestAction = IAction<IPostsRequestActionPayload, PostsTypes>

export interface IPostsSuccessPayload extends Pick<IPosts, "posts" | "postsCount"> {}
export type PostsGetSuccessAction = IAction<IPostsSuccessPayload, PostsTypes>

export interface IPostsUpdatePayload extends Pick<IPosts, "posts" | "postsCount"> {}
export type PostsGetUpdateAction = IAction<IPostsUpdatePayload, PostsTypes>

export type PostsGetErrorAction = IAction<string, PostsTypes>

export type PostsStateResetAction = IAction<undefined, PostsTypes>

export type PostsActions = PostsGetRequestAction | PostsGetSuccessAction | PostsGetErrorAction | PostsStateResetAction
