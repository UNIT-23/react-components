import { Styles } from "react-jss"
import { Fonts } from "../../../../theme"

export const styles: Styles = {
	container: {
		display: "flex",
		justifyContent: "center"
	},
	perPageContainer: {
		display: "flex",
		alignItems: "center",
		marginLeft: 33
	},
	perPage: {
		minWidth: 67,
		height: 52,
		paddingLeft: 4,
		paddingRight: 4,
		"& div": {
			"& div": {
				margin: 0
			}
		}
	},
	perPageText: {
		fontSize: Fonts.size.regular,
		fontFamily: Fonts.type.base
	}
}
