import { DateRangePickerShape } from "react-dates"

export interface IProps extends
Partial<Pick<DateRangePickerShape, "startDate" | "endDate" | "onFocusChange" | "onDatesChange">> {
readonly date?: string
readonly autoFocus?: boolean
readonly autoFocusEndDate?: boolean
readonly type?: string
readonly enableBackDates?: boolean
readonly  onDateChange?: (value: string) => void
readonly formats?: string

}
