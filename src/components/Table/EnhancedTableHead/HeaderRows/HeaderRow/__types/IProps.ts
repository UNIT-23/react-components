import { WithStyles } from "@material-ui/core/styles"

import styles from "../styles"

export interface IProps extends WithStyles<typeof styles>, ITableHeader {
	readonly onRequestSort: Function
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
}
