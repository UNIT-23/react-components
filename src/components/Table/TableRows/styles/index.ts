import { createStyles } from "@material-ui/core"

import { Fonts, Theme } from "../../../../theme"

export const styles = () =>
	createStyles({
		root: {
			"&:hover": {
				backgroundColor: `${Theme.gray} !important`
			}
		},
		tableCell: {
			textAlign: "center",
			fontSize: Fonts.size.regular,
			color: Theme.info,
			border: "none",
			fontFamily: Fonts.type.base
		},
		row: {
			"&:hover div": {
				visibility: "visible"
			}
		},
		controls: {
			visibility: "hidden"
		}
	})
