import { StyledComponentProps, WithTheme } from "react-jss"
import { Color, ColorResult } from "react-color"
import { Theme } from "../../../../theme"

// tslint:disable:readonly-array
export interface IProps extends StyledComponentProps, Partial<WithTheme<typeof Theme>> {
	readonly color?: Color
	readonly onChange: (event: ColorResult) => void
}
