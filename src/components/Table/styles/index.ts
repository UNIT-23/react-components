import { createStyles } from "@material-ui/core"
import { Theme } from "../../../theme"

export const styles = () =>
	createStyles({
		root: {
			background: Theme.primaryLight
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
