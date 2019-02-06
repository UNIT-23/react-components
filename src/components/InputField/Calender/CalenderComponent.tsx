// tslint:disable:no-import-side-effect
import * as React from "react"
import { DateRangePicker, FocusedInputShape, SingleDatePicker } from "react-dates"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

// Import Left from "../../Icons/ChevronLeftIcon"
import Right from "../../Icons/ChevronRightIcon"
import Left from "../../Icons/ChevronLeftIcon"

import { IState } from "./__types/IState"
import { IProps } from "./__types/IProps"

import injectSheet from "react-jss"
import { styles } from "./styles"

import { IMomentDateRange } from "./__types/IMomentDateRange"

import { Moment } from "moment"
import { getMomentInstance } from "../../../services/dateService"

class CalenderComponent extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		// tslint:disable-next-line:no-let
		let focusedInput: FocusedInputShape = null
		if (props.autoFocus) {
			focusedInput = "startDate"
		} else if (props.autoFocusEndDate) {
			focusedInput = "endDate"
		}

		this.state = {
			focusedInput,
			focused: false,
			startDate: null,
			endDate: null
		}

		this.onFocusChange = this.onFocusChange.bind(this)
		this.onFocusChangeSingle = this.onFocusChangeSingle.bind(this)
		this.onDatesChangeHandler = this.onDatesChangeHandler.bind(this)
		this.onDatesRangeChangeHandler = this.onDatesRangeChangeHandler.bind(this)
	}

	public componentDidMount() {
		const { startDate, endDate } = this.props

		this.setState({
			startDate: getMomentInstance(startDate),
			endDate: getMomentInstance(endDate)
		})
	}

	public onFocusChange(focusedInput: FocusedInputShape): void {
		this.setState({ focusedInput })
	}

	public onFocusChangeSingle({ focused }: { readonly focused: boolean }): void {
		this.setState({ focused })
	}
	public onDatesChangeHandler(value: Moment) {
		const { onDateChange, formats } = this.props
		onDateChange(value.format(formats || "YYYY-MM-DD"))
	}

	public onDatesRangeChangeHandler(value: IMomentDateRange): void {
		const { onDatesChange, formats } = this.props
		const { startDate } = this.state

		if (value.startDate) {
			this.setState({
				startDate: value.startDate
			})
		}

		this.setState({
			endDate: value.endDate
		})

		if (value.endDate) {
			onDatesChange({
				startDate: startDate.format(formats || "YYYY-MM-DD"),
				endDate: value.endDate.format(formats || "YYYY-MM-DD")
			})
		}
	}

	public render(): JSX.Element {
		const { type, date, enableBackDates, classes} = this.props
		const outRangeDates = enableBackDates && (() => false)

		return (
			<div>
				{type !== "single" ? (
					<DateRangePicker
						startDate={this.state.startDate}
						startDateId="start_date"
						endDate={this.state.endDate}
						endDateId="end_date"
						onDatesChange={this.onDatesRangeChangeHandler}
						onFocusChange={this.onFocusChange}
						focusedInput={this.state.focusedInput}
						showDefaultInputIcon
						displayFormat="YYYY-MM-DD"
						hideKeyboardShortcutsPanel
						navPrev={<Left className={classes.leftSvg} />}
						navNext={
							<div className={classes.rangeArrow}>
								<Right className={classes.rightSvg} />
							</div>}
						isOutsideRange={outRangeDates}
					/>
				) : (
					<SingleDatePicker
						date={getMomentInstance(date)}
						onDateChange={this.onDatesChangeHandler}
						focused={this.state.focused}
						onFocusChange={this.onFocusChangeSingle}
						id="date"
						showDefaultInputIcon
						placeholder="Select date"
						displayFormat="YYYY-MM-DD"
						isOutsideRange={outRangeDates}
						numberOfMonths={1}
						hideKeyboardShortcutsPanel
						navPrev={<Left className={classes.leftSvg} />}
						navNext={
							<div className={classes.myArrow}>
								<Right className={classes.rightSvg} />
							</div>}
					/>
				)}
			</div>
		)
	}
}

export default injectSheet(styles)(CalenderComponent)
