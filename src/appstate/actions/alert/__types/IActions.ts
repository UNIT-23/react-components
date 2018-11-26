import { AlertTypes } from "../../../types/alertTypes"

export interface IAlertOpenPayload extends Pick<IAlert, "message" | "alertLevel"> {}
export type AlertOpenAction = IAction<IAlertOpenPayload, AlertTypes>

export type AlertCloseAction = IAction<undefined, AlertTypes>

export type AlertActions = AlertOpenAction | AlertCloseAction
