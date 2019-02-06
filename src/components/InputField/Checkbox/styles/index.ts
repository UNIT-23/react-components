import { createStyles, Theme } from "@material-ui/core"

export const styles = (theme: Theme) =>
	createStyles({
	root: {
		color: `${theme.palette.secondary.main}!important`
	},
	checked: {
		color: `${theme.palette.secondary.main}!important`
	}
	})
