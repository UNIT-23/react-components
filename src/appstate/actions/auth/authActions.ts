import { AuthTypes } from "../../types/authTypes"

import {
	ILoginRequestActionPayload,
	LoginSuccessAction,
	LoginErrorAction,
	ILoginSuccessPayload,
	LoginRequestAction,
	LoginStateResetAction
} from "./__types/IActions"

export function loginRequest(payload: ILoginRequestActionPayload): LoginRequestAction {
	return {
		payload,
		type: AuthTypes.LOGIN_REQUEST
	}
}

export function loginSuccess(payload: ILoginSuccessPayload): LoginSuccessAction {
	return {
		payload,
		type: AuthTypes.LOGIN_REQUEST_SUCCESS
	}
}

export function loginError(payload: string): LoginErrorAction {
	return {
		payload,
		type: AuthTypes.LOGIN_REQUEST_ERROR
	}
}

export function loginStateReset(): LoginStateResetAction {
	return {
		type: AuthTypes.LOGIN_REQUEST_ERROR
	}
}
