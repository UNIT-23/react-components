import { Theme, createStyles } from "@material-ui/core"

import { TableValues } from "../__types/TableValues"

export const styles = (theme: Theme) =>
	createStyles({
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
		},
		footer: {
			width: "100%",
			display: "flex",
			justifyContent: "flex-end"
		}
	})
