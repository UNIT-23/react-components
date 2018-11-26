import { GridSpacing } from "@material-ui/core/Grid"

export interface IType {
	readonly base: string
	readonly bold: string
	readonly digital: string
	readonly emphasis: string
}

export interface IIconSize {
	readonly medium: number
}

export interface ISize {
	readonly h1: string
	readonly h2: string
	readonly h3: string
	readonly h4: string
	readonly h5: string
	readonly h6: string
	readonly icon: string
	readonly input: string
	readonly medium: string
	readonly regular: string
	readonly small: string
	readonly tiny: string
}

export interface IStyle {
	readonly dashboardGridSpacing: GridSpacing
	readonly description: {
		readonly fontFamily: string
		readonly fontSize: string
	}
	readonly h1: {
		readonly fontFamily: string
		readonly fontSize: string
	}
	readonly h2: {
		readonly fontSize: string
		readonly fontWeight: string
	}
	readonly h3: {
		readonly fontFamily: string
		readonly fontSize: string
	}
	readonly h4: {
		readonly fontFamily: string
		readonly fontSize: string
	}
	readonly h5: {
		readonly fontFamily: string
		readonly fontSize: string
	}
	readonly h6: {
		readonly fontFamily: string
		readonly fontSize: string
	}
	readonly normal: {
		readonly fontFamily: string
		readonly fontSize: string
	}
}
