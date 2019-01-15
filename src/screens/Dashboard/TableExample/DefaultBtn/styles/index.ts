import { Styles } from "react-jss"

import { Theme } from "../../../../../theme"

export const styles: (theme: typeof Theme) => Styles = (theme: typeof Theme) => ({
	container: {
		width: 300,
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center"
	},
	input: {
		width: 200
	},
	addContainer: {
		height: 40,
		width: 40,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "0px 1px 9px #aaa",
		cursor: "pointer",
		backgroundColor: theme.secondaryDark,
		borderRadius: "50%"
	}
})
