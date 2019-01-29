import { createStyles } from "@material-ui/core"

import { Theme } from "../../../theme"

export const styles = (theme: typeof Theme) =>
	createStyles({
		root: {
			width: "100%",
			background: theme.backgroundColor
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
