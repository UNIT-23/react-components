export interface IRow<TData> {
	readonly [key: string]: ITableData<TData>
}
