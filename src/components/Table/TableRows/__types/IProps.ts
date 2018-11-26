import { WithStyles } from "@material-ui/core/styles"

import { IRow } from "../../__types/IRow"

import styles from "../styles"
import { IHead } from "../../__types/IHead"

export interface IProps<TRow extends IRow, THead extends IHead> extends WithStyles<typeof styles> {
	readonly rows: ReadonlyArray<TRow>
	readonly handleSelectClick?: (event: React.ChangeEvent, id: string) => void
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
	readonly page: number
	readonly rowsPerPage: number
	readonly selected: ReadonlyArray<number | string>
	readonly columns: ReadonlyArray<THead>
}
