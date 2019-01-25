import { GridSpacing } from "@material-ui/core/Grid"

export interface IType {
	readonly base: string
}

export interface IIconSize {
	readonly medium: number
	readonly small: number
	readonly mini: number
}

export interface ISize {
	readonly h1: string
	readonly h2: string
	readonly h3: string
	readonly h4: string
	readonly h5: string
	readonly caption: string
	readonly regular: string
	readonly label: string
}

export interface IStyle {
	readonly dashboardGridSpacing: GridSpacing
	readonly h1: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly letterSpacing: string
		readonly color: string
	}
	readonly h2: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly letterSpacing: string
		readonly color: string
	}
	readonly h3: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly letterSpacing: string
		readonly color: string
	}
	readonly h4: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly letterSpacing: string
		readonly color: string
	}
	readonly h5: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly letterSpacing: string
		readonly color: string
	}
	readonly caption: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly color: string
	}
	readonly label: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly textTransform: string
		readonly color: string
	}
	readonly regular: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly color: string
	}
	readonly lightText: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly color: string
	}
	readonly linkText: {
		readonly fontFamily: string
		readonly fontStyle: string
		readonly fontWeight: string
		readonly lineHeight: string
		readonly fontSize: string
		readonly color: string
	}
}
