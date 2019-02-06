import { createStyles, Theme } from "@material-ui/core"

export const styles = (theme: Theme) =>
	createStyles({
	container: {
		height: "31px",
		margin: "5px"
	},
	checked: {
		color: theme.palette.primary.main,
		"& + $bar": {
			opacity: 1,
			background: theme.palette.secondary.main,
		}
	},
	bar: {
		background: "#F2F4F6",
		borderRadius: "12px",
		width: "40px",
		height: "22px",
		opacity: 1,
	},
	icon: {
		color: "#98A9BC",
		width: "16px",
		height: "16px",
		margin: "11px 0px 3px 4px"
	},
	iconChecked: {
		color: theme.palette.primary.main
	}
})
