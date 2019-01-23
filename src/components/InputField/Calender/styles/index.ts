export const styles = {
	"@global": {
		".CalendarDay__selected_span": {
			background: "#F9F9F9",
			border: "1px double #F9F9F9",
			color: "#85C733",
			"&:hover , &:active": {
				background: "#85C733",
				border: "1px double #85C733",
				color: "#fff"
			}
		},
		".CalendarDay__hovered_span": {
			background: "#F9F9F9",
			border: "1px double #F9F9F9",
			color: "#85C733",
			"&:hover": {
				background: "#F9F9F9",
				border: "1px double #F9F9F9",
				color: "#85C733"
			}
		},
		".CalendarDay__hovered_span: active ": {
			background: "#85C733",
			border: "1px double #85C733",
			color: "#fff"
		},
		".CalendarDay__selected": {
			backgroundColor: "#85C733",
			border: "#85C733",
			color: "#F9F9F9",
			"&:hover,&:active": {
				backgroundColor: "#85C733",
				border: "#85C733",
				color: "#F9F9F9"
			}
		},
		".DayPicker_weekHeader": {
			margin: "-20px"
		},
		".DayPicker_transitionContainer": {
			margin: "-20px"
		},
		".DateInput_input__focused": {
			"border-bottom": "2px solid #85C733"
		},
		".DayPickerNavigation_button": {
			outline: "none"
		},
		".SingleDatePickerInput_calendarIcon ,.DateRangePickerInput_calendarIcon": {
			backgroundColor: "#85C733",
			color: "red"
		},
		".SingleDatePickerInput_calendarIcon_svg,.DateRangePickerInput_calendarIcon_svg": {
			fill: "white"
		}
	}
}
