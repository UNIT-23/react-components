import { createStyles, Theme } from "@material-ui/core"
import { StyleRules } from "@material-ui/core/styles/withStyles"
import { Fonts } from "../../../../theme"

export default (theme: Theme): StyleRules =>
	createStyles({
		root: {
			backgroundColor: theme.palette.primary.light
		},
		searchBarSpacer: {
			flex: "0 1 5%"
		},
		searchBar: {
			color: theme.palette.text.secondary,
			maxWidth: 281,
			"& input": {
				maxHeight: 41,
				marginTop: 0,
				backgroundColor: theme.palette.grey["100"],
				"&::-webkit-input-placeholder": {
					color: "#D3D7E1"
				}
			}
		},
		actionButtonSpacer: {
			flex: "1 1 0%"
		},
		title: {
			flex: "0 0 auto",
			fontWeight: 500,
			color: theme.palette.secondary.main,
			textTransform: "uppercase",
			fontSize: Fonts.size.h5
		}
	})
