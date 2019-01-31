import { StyledComponentProps } from "react-jss"

export interface IProps<TData> extends StyledComponentProps {
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
