import { ISize, IStyle, IType, IIconSize } from "./types/Fonts.types"
import { Theme } from "./Themes"

const type: IType = {
	base: "Roboto"
}

enum gridSize {
	one = 1,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	ten,
	eleven,
	twelve
}

const iconSize: IIconSize = {
	medium: 30
}

const size: ISize = {
	h1: "1.875rem",
	h2: "1.625rem",
	h3: "1.25rem",
	h4: "1.125rem",
	h5: "1rem",
	caption: "0.875rem",
	regular: "0.875rem",
	label: "0.75rem"
}

const style: IStyle = {
	dashboardGridSpacing: 24,
	h1: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: "bold",
		lineHeight: "normal",
		fontSize: size.h1,
		letterSpacing: "0.2",
		color: "#1B1E24"
	},
	h2: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: "bold",
		lineHeight: "normal",
		fontSize: size.h2,
		letterSpacing: "0.2",
		color: "#1B1E24"
	},
	h3: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: "bold",
		lineHeight: "normal",
		fontSize: size.h3,
		letterSpacing: "0.2",
		color: "#1B1E24"
	},
	h4: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: "bold",
		lineHeight: "normal",
		fontSize: size.h4,
		letterSpacing: "0.2",
		color: "#1B1E24"
	},
	h5: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: "bold",
		lineHeight: "normal",
		fontSize: size.h5,
		letterSpacing: "0.2",
		color: "#1B1E24"
	},
	caption: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "normal",
		fontSize: size.caption,
		color: "#1B1E24"
	},
	label: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: 300,
		lineHeight: "normal",
		fontSize: size.regular,
		textTransform: "uppercase",
		color: Theme.info
	},
	regular: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "1.3125rem",
		fontSize: size.regular,
		color: "#98A9BC"
	},
	lightText: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "1.3125rem",
		fontSize: size.regular,
		color: "#252631"
	},
	linkText: {
		fontFamily: type.base,
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "normal",
		fontSize: size.regular,
		color: "#252631"
	}
}

export default {
	type,
	size,
	iconSize,
	style,
	gridSize
}
