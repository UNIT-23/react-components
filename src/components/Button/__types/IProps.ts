import * as React from "react"
import { StyledComponentProps } from "react-jss"

export interface IProps
	extends StyledComponentProps,
		React.DOMAttributes<HTMLDivElement | HTMLButtonElement>,
		Pick<React.AllHTMLAttributes<HTMLButtonElement>, "disabled" | "type"> {
	readonly children?: React.ReactNode
	readonly addBtn?: boolean
	readonly padding?: string | number
	readonly color?: string
	readonly width?: string | number
	readonly margin?: string | number
}
