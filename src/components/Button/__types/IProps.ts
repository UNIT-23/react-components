import * as React from "react"
import { StyledComponentProps, WithTheme } from "react-jss"
import { Theme } from "../../../theme"

export interface IProps
	extends StyledComponentProps,
		Partial<WithTheme<typeof Theme>>,
		React.DOMAttributes<HTMLDivElement | HTMLButtonElement>,
		Pick<React.AllHTMLAttributes<HTMLButtonElement>, "disabled" | "type"> {
	readonly children?: React.ReactNode
	readonly addBtn?: boolean
	readonly autoFocus?: boolean
	readonly padding?: string | number
	readonly color?: string
	readonly width?: string | number
	readonly margin?: string | number
	readonly borderRadius?: string | number
	readonly buttonType?: "default" | "square"
	readonly outline?: boolean
	readonly background?: string
	readonly borderColor?: string
}
