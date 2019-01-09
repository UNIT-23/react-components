import { DateRangePickerShape } from "react-dates"

export interface IProps extends Partial<Pick<DateRangePickerShape, "onFocusChange">> {
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
}
