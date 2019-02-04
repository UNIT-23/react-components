import { createStyles, Theme } from "@material-ui/core"

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			background: theme.palette.primary.light
		},
		table: {
			minWidth: 1020
		},
		tableBody: {
			backgroundColor: theme.palette.primary.light
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
