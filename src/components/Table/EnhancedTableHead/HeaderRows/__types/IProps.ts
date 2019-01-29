export interface IProps<TData> {
	readonly onRequestSort: Function
	readonly orderBy: keyof TData
	readonly orderType?: "asc" | "desc"
	readonly rows: ReadonlyArray<ITableHeader<TData>>
}
