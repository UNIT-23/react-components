import { ISize, IStyle, IType, IIconSize } from "./types/Fonts.types"

const type: IType = {
	base    : "Avenir-Book",
	digital : "digital-7",
	bold    : "Avenir-Black",
	emphasis: "HelveticaNeue-Italic"
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
	h1     : "1.8357487921rem",
	h2     : "1.6425120772rem",
	h3     : "1.6425120772rem",
	h4     : "1.2560386472rem",
	h5     : "1.2560386472rem",
	h6     : "0.9178743961rem",
	input  : "0.8695652173rem",
	regular: "0.8212560386rem",
	medium : "0.6763285024rem",
	small  : "0.5797101449rem",
	tiny   : "0.4106280193rem",
	icon   : "1.4492753622rem"
}

const style: IStyle = {
	dashboardGridSpacing: 24,
	h1                  : {
		fontFamily: type.base,
		fontSize  : size.h1
	},
	h2: {
		fontWeight: "bold",
		fontSize  : size.h2
	},
	h3: {
		fontFamily: type.emphasis,
		fontSize  : size.h3
	},
	h4: {
		fontFamily: type.base,
		fontSize  : size.h4
	},
	h5: {
		fontFamily: type.base,
		fontSize  : size.h5
	},
	h6: {
		fontFamily: type.emphasis,
		fontSize  : size.h6
	},
	normal: {
		fontFamily: type.base,
		fontSize  : size.regular
	},
	description: {
		fontFamily: type.base,
		fontSize  : size.medium
	}
}

export default {
	type,
	size,
	iconSize,
	style,
	gridSize
}
