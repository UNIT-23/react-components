import { createStyles } from "@material-ui/core"
import { StyleRules, StyleRulesCallback } from "@material-ui/core/styles/withStyles"

import { Fonts, Theme } from "../../../../theme"

export const styles: StyleRulesCallback = (): StyleRules =>
	createStyles({
		root: {},
		tableCell: {
			textAlign: "center",
			fontSize: Fonts.size.regular,
			color: Theme.info,
			border: "none",
			fontFamily: Fonts.type.base
		}
	})
