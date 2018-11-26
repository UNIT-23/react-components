import * as React from "react"
import { IHead } from "../../__types/IHead"

export interface IProps<THead extends IHead> {
	readonly numSelected: number
	readonly onRequestSort: Function
	readonly handleSelectClick?: (event: React.ChangeEvent, id: string) => void
	readonly onSelectAllClick?: (event: React.ChangeEvent) => void
	readonly orderBy: string
	readonly orderType?: "asc" | "desc"
	readonly rowCount: number
	readonly columns: ReadonlyArray<THead>
}
