import { createStyles } from "@material-ui/core"
import { Theme } from "../../../theme"

export const styles = () =>
	createStyles({
		root: {
			background: Theme.primaryLight,
			boxShadow: "0px 1px 2px rgba(8, 35, 48, 0.15), 0px 2px 6px rgba(8, 35, 48, 0.1); border-radius: 3px"
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
