import { Styles } from "react-jss"
import { Fonts, Theme } from "../../../../theme"

export const styles: Styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		marginTop: 40
	},
	paginationContainer: {
		display: "flex"
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
		fontFamily: Fonts.type.base,
		color: Theme.icons
	},
	previousButton: {
		"& button": {
			margin: "13px 28px 21px 0px"
		}
	},
	nextButton: {
		"& button": {
			margin: "13px 0px 21px 28px"
		}
	},
	paginationButton: {
		"& button": {
			margin: "13px 2px 21px 2px"
		}
	}
}
