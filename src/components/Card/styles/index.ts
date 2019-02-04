import { Styles } from "react-jss"

import { Theme } from "../../../theme"

import { IProps } from "../__types/IProps"

export const styles: (theme: typeof Theme) => Styles<undefined, IProps> = (theme: typeof Theme) => ({
	container: {
		backgroundColor: "#fff",
		color: "#fff",
		height: "100%",
		minHeight: 170,
		minWidth: "23%",
		width: ((({ width }: IProps) => width || "auto") as unknown) as React.ReactText,
		boxShadow: "1px 3px 8px 0px #ccc",
		overflowY: "scroll"
	},
	headingContainer: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: ({ Heading }: IProps) => (Heading && theme.secondaryLight) || theme.primary,
		height: 50
	},
	leftHeading: {
		display: "flex"
	},
	rightHeading: {
		display: "flex"
	},
	content: {
		color: "#222"
	}
})
