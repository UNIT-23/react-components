export const styles = {
	"@global": {
		".CalendarDay__default": {
			color: "#252631"
		},
		".CalendarDay": {
			font: "14px Rubik",
			border: "none",
			color: "#252631"
		},
		".CalendarDay__selected_span": {
			background: "#F9F9F9",
			border: "1px double #F9F9F9",
			color: "#85C733",
			"&:hover , &:active": {
				background: "#85C733",
				border: "1px double #85C733",
				color: "white"
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
			color: "#85C733"
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
		".DateInput_input__focused": {
			"border-bottom": "2px solid #85C733"
		},
		".DayPickerNavigation_button": {
			outline: "none"
		},

		".SingleDatePickerInput_calendarIcon_svg,.DateRangePickerInput_calendarIcon_svg": {
			fill: "white"
		},
		".DateInput_fang": {
			margin: "-10px"
		},
		".DayPicker_weekHeader_li": {
			color: "#778CA2",
			font: "14px Rubik"
		},
		".CalendarMonth_caption": {
			color: "#252631",
			background: "#F8FAFB",
			"font-family": "Roboto 16px",
			width: "361px",
			"margin-left": "-40px"
		},
		".DateRangePickerInput_calendarIcon, .SingleDatePickerInput_calendarIcon": {
			padding: "0px"
		},
		".DateRangePickerInput_calendarIcon_svg , .SingleDatePickerInput_calendarIcon_svg": {
			fill: "#85C733"
		},
		".DateRangePickerInput__withBorder, .SingleDatePickerInput__withBorder": {
			"padding-inline-end": "20px"
		},
		svg: {
			margin: "20px"
		}
	},
	myArrow: {
		// Jss-expand gives more readable syntax
		margin: "-75px 250px",
		outline: "none",
		border: "none",
		"border-style": "none"
	},
	rangeArrow: {
		margin: "-78px 550px",
		outline: "none",
		border: "none"
	}
}
