import { StyledComponentProps } from "react-jss"

export interface IProps<TData extends IDefaultDataType> extends StyledComponentProps {
	handleSelectClick?(event: React.ChangeEvent, id: number): void
	onChangePage?(event: React.MouseEvent<HTMLButtonElement>, page: number): void
	onChangeRowsPerPage?(selected: IDefaultDataType): void
	onChangeSort?(event: MouseEvent, orderByUpdate: string): void
	editHandler?(row: ITableData<TData>): (event: React.MouseEvent<HTMLDivElement>) => void
	deleteHandler?(row: ITableData<TData>): (event: React.MouseEvent<HTMLDivElement>) => void
	readonly count?: number
	readonly dataRequestState?: API
	readonly DefaultBtn?: JSX.Element
	readonly handleSelectAllClick?: React.ChangeEventHandler
	readonly header: ReadonlyArray<ITableHeader<TData>>
	readonly orderBy?: keyof TData
	readonly orderType?: "asc" | "desc"
	readonly page?: number
	readonly rows: ReadonlyArray<ITableData<TData>>
	readonly rowsPerPage?: number
	readonly selected?: ReadonlyArray<number>
	readonly SelectedBtn?: JSX.Element
	readonly SearchBar?: JSX.Element
	readonly tableTitle?: JSX.Element
}
