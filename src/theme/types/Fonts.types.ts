import { GridSpacing } from "@material-ui/core/Grid"

export interface IType {
	readonly base: string
}

export interface IIconSize {
	readonly medium: number
	readonly small: number
	readonly mini: number
	readonly width: number
	readonly height: number
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
	readonly h1: React.CSSProperties
	readonly h2: React.CSSProperties
	readonly h3: React.CSSProperties
	readonly h4: React.CSSProperties
	readonly h5: React.CSSProperties
	readonly caption: React.CSSProperties
	readonly label: React.CSSProperties
	readonly regular: React.CSSProperties
	readonly lightText: React.CSSProperties
	readonly linkText: React.CSSProperties
}
