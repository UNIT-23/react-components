import { Styles } from "react-jss"
import { Colors } from "../../../../theme"

export const styles: Styles = {
	root: {
		padding: 0,
		color: Colors.primary,
		"&$checked": {
			color: Colors.primary
		}
	},
	checked: {}
}
