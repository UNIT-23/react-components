import { GridSpacing } from "@material-ui/core/Grid"
import { CSSProperties } from "react-jss"

export interface IType {
	readonly base: string
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
	readonly caption: string
	readonly regular: string
	readonly label: string
}

export interface IStyle {
	readonly dashboardGridSpacing: GridSpacing
	readonly h1: CSSProperties
	readonly h2: CSSProperties
	readonly h3: CSSProperties
	readonly h4: CSSProperties
	readonly h5: CSSProperties
	readonly caption: CSSProperties
	readonly label: CSSProperties
	readonly regular: CSSProperties
	readonly lightText: CSSProperties
	readonly linkText: CSSProperties
}
