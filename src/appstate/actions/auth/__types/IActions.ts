import { AuthTypes } from "../../../types/authTypes"

export interface ILoginRequestActionPayload {
	readonly email: string
	readonly password: string
}
export type LoginRequestAction = IAction<ILoginRequestActionPayload, AuthTypes>

export interface ILoginSuccessPayload extends Pick<IAuth, "user" | "authToken"> {}
export type LoginSuccessAction = IAction<ILoginSuccessPayload, AuthTypes>

export type LoginErrorAction = IAction<string, AuthTypes>

export type LoginStateResetAction = IAction<undefined, AuthTypes>

export type AuthActions = LoginRequestAction | LoginSuccessAction | LoginErrorAction | LoginStateResetAction
