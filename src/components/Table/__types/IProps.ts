import { StyledComponentProps } from "react-jss"

import { IHead } from "./IHead"

export interface IProps extends StyledComponentProps {
	readonly count: number
	readonly dataRequestState?: API
	readonly DefaultBtn?: JSX.Element
	readonly handleSelectAllClick?: React.ChangeEventHandler
	readonly handleSelectClick?: (event: React.ChangeEvent, id: number) => void
	readonly header: ReadonlyArray<IHead>
	readonly onPageChange?: (page: number, rowsPerPage: number) => void
	readonly onRowsPerPageChange?: (page: number, rowsPerPage: number) => void
	readonly rows: ReadonlyArray<ITableData>
	readonly rowsPerPage?: number
	readonly selected?: ReadonlyArray<number>
	readonly SelectedBtn?: JSX.Element
	readonly tableTitle: JSX.Element
}
