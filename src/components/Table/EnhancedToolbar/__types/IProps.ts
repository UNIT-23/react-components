import { WithTheme, StyledComponentProps } from "react-jss"

import { Theme } from "../../../../theme"

export interface IProps extends Partial<WithTheme<typeof Theme>>, StyledComponentProps {
	readonly DefaultBtn?: JSX.Element
	readonly numSelected?: number
	readonly SelectedBtn?: JSX.Element
	readonly tableTitle?: JSX.Element
	readonly SearchBar?: JSX.Element
}
