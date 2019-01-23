import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	handleSelectClick?(event: React.ChangeEvent, id: number): void
	onChangePage(event: React.MouseEvent<HTMLButtonElement>, page: number): void
	onChangeRowsPerPage(selected: IDropDownData<number>): void
	onChangeSort(event: MouseEvent, orderByUpdate: string): void
	readonly count: number
	readonly dataRequestState?: API
	readonly DefaultBtn?: JSX.Element
	readonly handleSelectAllClick?: React.ChangeEventHandler
	readonly header: ReadonlyArray<ITableHeader>
	readonly orderBy?: string
	readonly orderType?: "asc" | "desc"
	readonly page: number
	readonly rows: ReadonlyArray<ITableData>
	readonly rowsPerPage: number
	readonly selected?: ReadonlyArray<number>
	readonly SelectedBtn?: JSX.Element
	readonly tableTitle: JSX.Element
}
