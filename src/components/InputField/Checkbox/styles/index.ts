import { Colors } from "../../../../theme"

// tslint:disable-next-line:no-any
export const styles = () => ({
	root: {
		padding: 0,
		color: Colors.primary,
		"&$checked": {
			color: Colors.primary
		}
	},
	checked: {}
})
