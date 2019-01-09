import * as React from "react"

export interface IProps<THead extends ITableHeader> {
	readonly numSelected: number
	readonly onRequestSort: Function
	readonly handleSelectClick?: (event: React.ChangeEvent, id: number) => void
	readonly onSelectAllClick?: (event: React.ChangeEvent) => void
	readonly orderBy: string
	readonly orderType?: "asc" | "desc"
	readonly rowCount: number
	readonly columns: ReadonlyArray<THead>
}
