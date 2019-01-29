import { Theme, Fonts } from "../../../../theme"
import { inputBaseStyle } from "../../styles"

// tslint:disable-next-line:no-any
export const getSelectStyles = (error: string, touched: boolean) => ({
	control: (base: Object) => ({
		...base,
		...inputBaseStyle,
		minHeight: 52,
		backgroundColor: error && touched ? Theme.accentLight : Theme.primary,
		borderColor: error && touched ? Theme.danger : Theme.primaryDark,
		":hover": {
			...(base as any)[":hover"],
			backgroundColor: Theme.primary
		},
		"&:hover": {
			borderWidth: 2,
			backgroundColor: Theme.primary
		},
		"&:focus": {
			borderWidth: 2,
			backgroundColor: Theme.primary
		}
	}),
	checkBoxSelect: (base: Object) => ({
		...base,
		"&:hover": {
			borderWidth: 2,
			backgroundColor: Theme.primary
		}
	}),
	singleValue: (base: Object) => ({
		...base,
		fontSize: Fonts.size.regular,
		fontFamily: Fonts.type.base,
		color: Theme.info,
		overflow: "none"
	}),
	multiValue: (base: Object) => ({
		...base,
		backgroundColor: Theme.primaryDark,
		height: 36,
		borderRadius: 4,
		"&:hover": {
			backgroundColor: Theme.background
		}
	}),
	multiValueLabel: (base: Object) => ({
		...base,
		alignSelf: "center",
		fontSize: Fonts.size.regular,
		fontFamily: Fonts.type.base,
		color: Theme.info
	}),
	multiValueRemove: (base: Object) => ({
		...base,
		"&:hover": {
			backgroundColor: Theme.background
		},
		"& span": {
			"& svg": {
				display: "flex",
				fill: Theme.icons,
				"& g": {
					"& circle": {
						fill: "ghostwhite"
					}
				}
			}
		}
	}),
	clearIndicator: (base: Object) => ({
		...base,
		"& svg": {
			color: Theme.icons
		}
	}),
	menu: (base: Object) => ({
		...base,
		width: "96%"
	}),
	menuList: (base: Object) => ({
		...base,
		"&:hover": {
			"&:focus": {
				backgroundColor: Theme.primary
			}
		}
	}),
	dropdownIndicator: (base: Object) => ({
		...base,
		"& svg": {
			width: 18,
			height: 21
		}
	}),
	options: (base: Object) => ({
		...base,
		backgroundColor: Theme.primary,
		"&:hover": {
			backgroundColor: Theme.primary
		}
	})
})
