import { createStyles } from "@material-ui/core"
import { StyleRules, StyleRulesCallback } from "@material-ui/core/styles/withStyles"

import { Fonts } from "../../../../theme"

const styles: StyleRulesCallback = (): StyleRules =>
	createStyles({
		root: {},
		tableCell: {
			textAlign: "center",
			fontSize: Fonts.size.medium
		}
	})

export default styles
