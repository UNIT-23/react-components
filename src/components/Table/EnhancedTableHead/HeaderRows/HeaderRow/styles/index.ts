import { createStyles } from "@material-ui/core"
import { Theme, Fonts } from "../../../../../../theme"

export const styles = () =>
	createStyles({
		root: {
			backgroundColor: Theme.gray,
			textAlign: "center",
			"& span": {
				"& span": {
					color: Theme.icons,
					fontWeight: 500,
					fontSize: Fonts.size.regular,
					fontFamily: Fonts.type.base
				}
			}
		}
	})
