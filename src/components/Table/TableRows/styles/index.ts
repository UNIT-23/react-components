import { createStyles, Theme } from "@material-ui/core"

export const styles = (_theme: Theme) =>
	createStyles({
		row: {
			"&:hover div": {
				visibility: "visible"
			}
		},
		controls: {
			visibility: "hidden"
		}
	})
