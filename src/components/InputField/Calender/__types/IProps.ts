import { DateRangePickerShape } from "react-dates"
import { StyledComponentProps } from "react-jss"
export interface IProps extends StyledComponentProps, Partial<Pick<DateRangePickerShape, "onFocusChange">> {
	readonly date?: string
	readonly autoFocus?: boolean
	readonly autoFocusEndDate?: boolean
	readonly startDate: string
	readonly endDate: string
	readonly type?: string
	readonly enableBackDates?: boolean
	readonly onDateChange?: (value: string) => void
	readonly formats?: string
	readonly onDatesChange?: (args: { readonly startDate: string; readonly endDate: string }) => void
	readonly style?: any
}
