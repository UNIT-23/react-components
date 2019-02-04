import { createStyles, Theme } from "@material-ui/core"

import { Fonts } from "../../../../theme"

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			"&:hover": {
				backgroundColor: `${theme.palette.grey["100"]} !important`
			},
			"&:hover div": {
				visibility: "visible"
			}
		},
		tableCell: {
			textAlign: "center",
			fontSize: Fonts.size.regular,
			color: theme.palette.text.primary,
			border: "none",
			fontFamily: Fonts.type.base
		},
		tableCellEmpty: {
			border: "none"
		},
		controls: {
			display: "flex",
			justifyContent: "space-around",
			visibility: "hidden"
		},
		control: {
			cursor: "pointer"
		}
	})
