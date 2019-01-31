import { StyledComponentProps } from "@material-ui/core"

export interface IProps<TData> extends StyledComponentProps {
	readonly rows: ReadonlyArray<ITableData<TData>>
	handleSelectClick?(event: React.ChangeEvent, id: number): void
	editHandler?(event: React.MouseEvent<HTMLDivElement>): void
	deleteHandler?(id: number): (event: React.MouseEvent<HTMLDivElement>) => void
	readonly orderBy: keyof TData
	readonly orderType: "asc" | "desc"
	readonly page: number
	readonly rowsPerPage: number
	readonly selected: ReadonlyArray<number | string>
	readonly columns: ReadonlyArray<ITableHeader<TData>>
}
