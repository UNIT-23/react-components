import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly count: number
	readonly dataRequestState?: API
	readonly DefaultBtn?: JSX.Element
	readonly handleSelectAllClick?: React.ChangeEventHandler
	handleSelectClick?(event: React.ChangeEvent, id: number): void
	readonly header: ReadonlyArray<ITableHeader>
	onPageChange?(page: number, rowsPerPage: number): void
	onSortChange?(orderBy: string, orderType: "asc" | "desc"): void
	onRowsPerPageChange?(page: number, rowsPerPage: number): void
	onRowsPerPageChange?(page: number, rowsPerPage: number): void
	readonly rows: ReadonlyArray<ITableData>
	readonly rowsPerPage?: number
	readonly selected?: ReadonlyArray<number>
	readonly SelectedBtn?: JSX.Element
	readonly tableTitle: JSX.Element
	readonly orderBy?: string
}
