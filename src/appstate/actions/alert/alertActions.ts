import { AlertTypes } from "../../types/alertTypes"

import { AlertOpenAction, AlertCloseAction, IAlertOpenPayload } from "./__types/IActions"

export function openAlert(payload: IAlertOpenPayload): AlertOpenAction {
	return {
		payload,
		type: AlertTypes.ALERT_OPEN
	}
}

export function closeAlert(): AlertCloseAction {
	return {
		type: AlertTypes.ALERT_CLOSE
	}
}
