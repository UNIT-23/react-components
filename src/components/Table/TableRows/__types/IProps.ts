import { WithStyles } from "@material-ui/core/styles"

import { styles } from "../styles"

export interface IProps<THead extends ITableHeader> extends WithStyles<typeof styles> {
	readonly rows: ReadonlyArray<ITableData>
	readonly handleSelectClick?: (event: React.ChangeEvent, id: number) => void
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
	readonly page: number
	readonly rowsPerPage: number
	readonly selected: ReadonlyArray<number | string>
	readonly columns: ReadonlyArray<THead>
}
