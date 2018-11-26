import { AuthTypes } from "../../types/authTypes"

import { AuthActions, LoginSuccessAction, LoginErrorAction } from "../../actions/auth/__types/IActions"

export const initialState: IAuth = {
	authToken: "",
	user: {
		id: "",
		name: ""
	},
	loginRequestState: API.NOT_REQUESTED,
	loginError: ""
}

export function authReducer(state: IAuth = initialState, action: AuthActions): IAuth {
	return (
		{
			[AuthTypes.LOGIN_REQUEST]: {
				...state,
				loginRequestState: API.REQUEST_PENDING
			},
			[AuthTypes.LOGIN_REQUEST_SUCCESS]: {
				...state,
				...(action as LoginSuccessAction).payload,
				loginRequestState: API.REQUEST_SUCCESS
			},
			[AuthTypes.LOGIN_REQUEST_ERROR]: {
				...state,
				loginError: (action as LoginErrorAction).payload,
				loginRequestState: API.REQUEST_ERROR
			},
			[AuthTypes.LOGIN_REQUEST_STATE_RESET]: {
				...state,
				loginRequestState: API.NOT_REQUESTED
			}
		}[action.type] || state
	)
}
