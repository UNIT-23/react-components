import { Theme } from "../../../../theme"
import { IProps } from "../__types/IProps"
import { RGBColor } from "react-color"

export const styles = (theme: typeof Theme) => ({
	swatch: {
		width: 82,
		height: 52,
		background: "#fff",
		borderRadius: 4,
		borderStyle: "solid",
		borderColor: theme.primaryDark,
		boxSizing: "border-box",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 6,
		paddingRight: 6
	},
	color: {
		width: 40,
		height: 40,
		borderRadius: 2,
		// tslint:disable:no-any
		background: (props: IProps) => {
			if (props.color) {
				const rgbColor = (props.color as any).rgb as RGBColor

				if (rgbColor) {
					return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${rgbColor.a})`
				}

				return (props.color as any).hex
			}

			return theme.secondaryLight
		}
	},
	popover: {
		position: "absolute",
		zIndex: 2
	},
	cover: {
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}
})
