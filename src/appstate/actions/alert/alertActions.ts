import { AlertTypes } from "../../types/alertTypes"

import { AlertOpenAction, AlertCloseAction, IAlertOpenPayload } from "./__types/IActions"

export function alertOpen(payload: IAlertOpenPayload): AlertOpenAction {
	return {
		payload,
		type: AlertTypes.ALERT_OPEN
	}
}

export function alertClose(): AlertCloseAction {
	return {
		type: AlertTypes.ALERT_CLOSE
	}
}
