import { createStyles } from "@material-ui/core"
import { StyleRules, StyleRulesCallback } from "@material-ui/core/styles/withStyles"

const styles: StyleRulesCallback = (): StyleRules =>
	createStyles({
		root     : {},
		tableCell: {
			textAlign: "center"
		}
	})

export default styles
