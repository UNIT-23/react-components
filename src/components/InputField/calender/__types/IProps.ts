import { DateRangePickerShape, SingleDatePickerShape } from "react-dates"

export interface IProps extends
Partial<Pick<SingleDatePickerShape, "date" | "onDateChange">>,
Partial<Pick<DateRangePickerShape, "startDate" | "endDate" | "onDatesChange" | "onFocusChange">> {
readonly autoFocus?: boolean
readonly autoFocusEndDate?: boolean
readonly type?: string
readonly enableBackDates?: boolean
}
