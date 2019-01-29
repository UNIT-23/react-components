import { createStyles } from "@material-ui/core"
import { StyleRules, StyleRulesCallback } from "@material-ui/core/styles/withStyles"
import { Theme, Fonts } from "../../../../../../theme"

const styles: StyleRulesCallback = (): StyleRules =>
	createStyles({
		root: {
			backgroundColor: Theme.gray,
			"& span": {
				"& span": {
					color: Theme.icons,
					fontWeight: 500,
					fontSize: Fonts.size.regular,
					fontFamily: Fonts.type.base
				}
			}
		},
		toolTip: {
			display: "flex",
			justifyContent: "center"
		}
	})

export default styles
