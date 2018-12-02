import { WithStyles } from "@material-ui/core/styles"

import styles from "../styles"

export interface IProps extends WithStyles<typeof styles> {
	readonly DefaultBtn?: JSX.Element
	readonly numSelected?: number
	readonly SelectedBtn?: JSX.Element
	readonly tableTitle?: string
}
