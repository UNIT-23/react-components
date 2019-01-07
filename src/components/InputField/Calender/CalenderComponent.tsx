// tslint:disable-next-line:no-import-side-effect
import "react-dates/initialize"
import { DateRangePicker, FocusedInputShape, SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import * as React from "react"
import { IState } from "./__types/IState"
import { IProps } from "./__types/IProps"

import moment , { Moment } from "moment"

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
		}

	 this.onFocusChange = this.onFocusChange.bind(this)
	 this.onFocusChangeSingle = this.onFocusChangeSingle.bind(this)
	 this.onDatesChangeHanlder = this.onDatesChangeHanlder.bind(this)

  }

 public onFocusChange(focusedInput: FocusedInputShape): void {
	this.setState({ focusedInput})
}

 public onFocusChangeSingle({focused}: { readonly focused: boolean }): void {
	this.setState({ focused})
}

 public onDatesChangeHanlder(value: Moment) {
	 const { onDateChange, formats} = this.props
	 onDateChange(value.format(formats || "YYYY-MM-DD"))
}

 public render() {
		 const {
				type,
				startDate,
				endDate,
				date,
				enableBackDates,
				onDatesChange
			} = this.props

		 return (

			<div>
				{
					type !== "single" ?
					<DateRangePicker
						startDate={startDate ? startDate : null}
						startDateId="start_date"
						endDate={endDate ? endDate : null}
						endDateId="end_date"
						onDatesChange={onDatesChange}
						onFocusChange={this.onFocusChange}
						focusedInput={this.state.focusedInput}
						showDefaultInputIcon
						displayFormat="YYYY-MM-DD"
					/>
					:
					<SingleDatePicker
						date={moment(date || {})}
						onDateChange={this.onDatesChangeHanlder}
						focused={this.state.focused}
						onFocusChange={this.onFocusChangeSingle}
						id="date"
						showDefaultInputIcon
						placeholder="Select date"
						displayFormat="YYYY-MM-DD"
						isOutsideRange={enableBackDates ? () => false : () => true}
					/>
				}
			</div>
		)
	}
}

export default CalenderComponent
