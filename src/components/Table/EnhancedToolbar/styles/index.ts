import { createStyles } from "@material-ui/core"
import { StyleRules } from "@material-ui/core/styles/withStyles"

import { MuiTheme } from "../../../../theme/MuiTheme"

export default (theme: typeof MuiTheme): StyleRules =>
	createStyles({
		root: {},
		spacer: {
			flex: "1 1 100%"
		},
		actions: {
			color: theme.palette.text.secondary
		},
		title: {
			flex: "0 0 auto"
		}
	})
