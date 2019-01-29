import { createStyles, Theme } from "@material-ui/core"

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			background: theme.palette.background.default
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
