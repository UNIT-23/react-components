export interface IProps<TData> extends ITableHeader<TData> {
	readonly onRequestSort: Function
	readonly orderBy: keyof TData
	readonly orderType: "asc" | "desc"
}
