import { FocusedInputShape } from "react-dates"
import { Moment } from "moment"

export interface IState {
	readonly focusedInput?: FocusedInputShape
	readonly focused?: boolean
	readonly startDate: Moment
	readonly endDate: Moment
}
