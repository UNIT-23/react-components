import { Theme } from "@material-ui/core"
import { Styles } from "react-jss"

import { TableValues } from "../__types/TableValues"

export const styles = (theme: Theme): Styles => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * TableValues.marginTopMultiplier
	},
	table: {
		minWidth: 1020
	},
	tableWrapper: {
		overflowX: "auto"
	},
	title: {
		textAlign: "center"
	}
})
