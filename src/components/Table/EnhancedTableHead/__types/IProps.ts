import * as React from "react"

export interface IProps<TData> {
	readonly numSelected: number
	readonly onRequestSort: Function
	readonly handleSelectClick?: (event: React.ChangeEvent, id: number) => void
	readonly onSelectAllClick?: (event: React.ChangeEvent) => void
	readonly orderBy: keyof TData
	readonly orderType?: "asc" | "desc"
	readonly rowCount: number
	readonly columns: ReadonlyArray<ITableHeader<TData>>
}
