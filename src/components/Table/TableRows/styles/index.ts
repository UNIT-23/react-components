import { createStyles } from "@material-ui/core"

import { Fonts, Theme } from "../../../../theme"

export const styles = () =>
	createStyles({
		tableCell: {
			textAlign: "center",
			fontSize: Fonts.size.regular,
			color: Theme.info,
			border: "none",
			fontFamily: Fonts.type.base
		}
	})
