import * as React from "react"
import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly checked?: boolean
	readonly onChange?: (event: React.ChangeEvent) => void
	readonly onBlur?: (event: React.FocusEvent) => void
}
