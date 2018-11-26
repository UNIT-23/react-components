import { WithStyles } from "@material-ui/core/styles"

import styles from "../styles"

export interface IProps extends WithStyles<typeof styles> {
	readonly DefaultBtn?: React.SFC | React.ComponentClass
	readonly numSelected?: number
	readonly SelectedBtn?: React.SFC | React.ComponentClass
	readonly tableTitle?: string
}
