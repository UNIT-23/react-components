import * as React from "react"

declare module "*.json" {
	// tslint:disable-next-line:no-any
	const value: any
	export default value
}

declare module "*.bmp" {
	const src: string
	export default src
}

declare module "*.gif" {
	const src: string
	export default src
}

declare module "*.jpg" {
	const src: string
	export default src
}

declare module "*.jpeg" {
	const src: string
	export default src
}

declare module "*.png" {
	const src: string
	export default src
}

declare module "*.svg" {
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>

	const src: string
	export default src
}

declare module "*.module.css" {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module "*.module.scss" {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module "*.module.sass" {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module "reactotron-react-js" {}
declare module "reactotron-redux" {}
declare module "reactotron-redux-saga" {}
declare module "redux-immutable-state-invariant" {}
