import { createStyles, Theme as MuiTheme } from "@material-ui/core"
import { StyleRules } from "@material-ui/core/styles/withStyles"
import { Theme, Fonts } from "../../../../theme"

export default (theme: MuiTheme): StyleRules =>
	createStyles({
		root: {
			backgroundColor: Theme.primaryLight
		},
		spacer: {
			flex: "0 1 5%"
		},
		actions: {
			color: theme.palette.text.secondary,
			maxWidth: 281,
			"& input": {
				maxHeight: 41,
				marginTop: 0,
				backgroundColor: Theme.gray,
				"&::-webkit-input-placeholder": {
					color: "#D3D7E1"
				}
			}
		},
		title: {
			flex: "0 0 auto",
			fontWeight: 500,
			color: Theme.secondary,
			textTransform: "uppercase",
			fontSize: Fonts.size.h5
		}
	})
