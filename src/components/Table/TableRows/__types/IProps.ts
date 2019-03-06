import { StyledComponentProps, WithTheme } from "@material-ui/core"

export interface IProps<TData extends IDefaultDataType> extends StyledComponentProps, Partial<WithTheme> {
	readonly rows: ReadonlyArray<ITableData<TData>>
	handleSelectClick?(event: React.ChangeEvent, id: number): void
	editHandler?(row: ITableData<TData>): (event: React.MouseEvent<HTMLDivElement>) => void
	deleteHandler?(row: ITableData<TData>): (event: React.MouseEvent<HTMLDivElement>) => void
	readonly orderBy: keyof TData
	readonly orderType: "asc" | "desc"
	readonly page: number
	readonly rowsPerPage: number
	readonly selected: ReadonlyArray<number | string>
	readonly columns: ReadonlyArray<ITableHeader<TData>>
}
