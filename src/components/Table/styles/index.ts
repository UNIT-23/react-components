import { Theme as MuiTheme, createStyles } from "@material-ui/core"

import { TableValues } from "../__types/TableValues"
import { Theme } from "../../../theme"

export const styles = (theme: MuiTheme) =>
	createStyles({
		root: {
			width: "100%",
			marginTop: theme.spacing.unit * TableValues.marginTopMultiplier
		},
		table: {
			minWidth: 1020
		},
		tableBody: {
			backgroundColor: Theme.primaryLight
		},
		tableWrapper: {
			overflowX: "auto"
		},
		title: {
			textAlign: "center"
		},
		footer: {
			width: "100%",
			display: "flex",
			justifyContent: "flex-end"
		}
	})
