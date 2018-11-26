import { WithStyles } from "@material-ui/core/styles"

import { IHead } from "../../../../__types/IHead"

import styles from "../styles"

export interface IProps extends WithStyles<typeof styles>, IHead {
	readonly onRequestSort: Function
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
}
