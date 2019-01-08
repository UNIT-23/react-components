import { Theme, createStyles } from "@material-ui/core"

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			width: "100%"
		},
		heading: {
			fontSize: 15,
			flexBasis: "33.33%",
			flexShrink: 0
		},
		secondaryHeading: {
			fontSize: 15,
			color: theme.palette.text.secondary
		}
	})
