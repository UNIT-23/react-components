import React from "react"
// @ts-ignore
import TimeKeeper from "react-timekeeper"

import { IState } from "./__types/IState"
import { IProps } from "./__types/IProps"
import { ITime } from "./__types/ITime"
import { formatNonStandardDate } from "../../../services/dateService"

class TimeKeeperComponent extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)
		this.state = {
			time: "12:00 pm"
		}
		this.onTimeChange = this.onTimeChange.bind(this)
	}
	public onTimeChange(newTime: ITime) {
		const { onChange } = this.props
		const formatedTime = formatNonStandardDate(newTime.formatted24, "HH:mm", "HH:mm:ss")

		onChange(formatedTime)

		this.setState({ time: newTime.formatted24 })
	}
	public render() {
		const { value } = this.props

		return (
			<TimeKeeper
				time={value ? formatNonStandardDate(value, "HH:mm:ss", "HH:mm") : this.state.time}
				onChange={this.onTimeChange}
				switchToMinuteOnHourSelect={true}
			/>
		)
	}
}
export default TimeKeeperComponent
