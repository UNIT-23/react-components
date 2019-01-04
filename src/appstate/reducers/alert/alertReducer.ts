import { AlertTypes } from "../../types/alertTypes"

import { AlertActions, AlertOpenAction } from "../../actions/alert/__types/IActions"
import { AlertLevel } from "../../../components/Alert/__types/AlertTypes"

export const initialState: IAlert = {
	alertState: false,
	message: "Something went wrong!",
	alertLevel: AlertLevel.Error
}

export function alertReducer(state: IAlert = initialState, action: AlertActions): IAlert {
	switch (action.type) {
		case AlertTypes.ALERT_OPEN:
			return {
				...state,
				message: (action as AlertOpenAction).payload.message || "Something went wrong!",
				alertState: true
			}
		case AlertTypes.ALERT_CLOSE:
			return {
				...state,
				alertState: false
			}
		default:
			return state
	}
}
