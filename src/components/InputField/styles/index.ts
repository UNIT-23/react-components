import { Fonts, Theme } from "../../../theme"
import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const inputBaseStyle: any = {
	width: "100%",
	fontSize: Fonts.size.regular,
	padding: {
		left: 15,
		top: 18,
		bottom: 17,
	},
	backgroundColor: ({ meta: { error, touched } }: IProps) =>
		error && touched ? Theme.accentLight : Theme.primary,
	borderColor: ({ meta: { error, touched } }: IProps) =>
		error && touched ? Theme.danger : Theme.primaryDark,
	borderRadius: 4,
	boxSizing: "border-box",
	borderWidth: 1,
	borderStyle: "solid",
	fontFamily: Fonts.type.base,
}

// tslint:disable-next-line:no-any
export const styles: any = {
	input: {
		...inputBaseStyle,
		height: 52,
	},
	textarea: {
		...inputBaseStyle,
		height: 77,
	},
	editor: {
		boxShadow: "1px 3px 8px 0px #ccc",
	},
}
