export interface IProps<TData> extends Partial<ITableHeader<TData>> {
	readonly onRequestSort?: Function
	readonly orderBy?: keyof TData
	readonly orderType?: "asc" | "desc"
}
