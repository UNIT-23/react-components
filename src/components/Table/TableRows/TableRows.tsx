import * as React from "react"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"

import InputField from "../../InputField/InputField"

import { IProps } from "./__types/IProps"
import { Values } from "./__types/Values"
import { InputTypes } from "../../../models/InputTypes"

import TrashIcon from "../../Icons/TrashIcon"
import EditIcon from "../../Icons/EditIcon"
import { withStyles } from "@material-ui/core"
import materialThemeWrapper from "../../MaterialThemeWrapper/MaterialThemeWrapper"
import { styles } from "./styles"

function stableSort<TData>(
	array: ReadonlyArray<ITableData<TData>>,
	cmp: (a: ITableData<TData>, b: ITableData<TData>) => number
): ReadonlyArray<ITableData<TData>> {
	const stabilizedThis: ReadonlyArray<ReadonlyArray<ITableData<TData> | number>> = array
		.map((el: ITableData<TData>, index: number) => [el, index])
		.sort((a: ReadonlyArray<ITableData<TData> | number>, b: ReadonlyArray<ITableData<TData> | number>) => {
			const orderType: number = cmp(a[0] as ITableData<TData>, b[0] as ITableData<TData>)

			return orderType !== 0 ? orderType : (a[1] as number) - (b[1] as number)
		})

	return stabilizedThis.map((el: ReadonlyArray<ITableData<TData> | number>) => el[0] as ITableData<TData>)
}

function getSorting<TData>(
	orderType: "asc" | "desc",
	orderBy: keyof TData
): (a: ITableData<TData>, b: ITableData<TData>) => number {
	return orderType === "desc"
		? (a: ITableData<TData>, b: ITableData<TData>): number => desc(a, b, orderBy)
		: (a: ITableData<TData>, b: ITableData<TData>): number => -desc(a, b, orderBy)
}

function desc<TData>(a: ITableData<TData>, b: ITableData<TData>, orderBy: keyof TData): number {
	return b[orderBy].value < a[orderBy].value ? -1 : b[orderBy].value > a[orderBy].value ? 1 : 0
}

function rowClickHandler(
	handleClick: Function,
	id: number | string
): ((event: React.MouseEvent<HTMLTableRowElement>) => void) | undefined {
	return (event: React.MouseEvent<HTMLTableRowElement>): Function => handleClick && handleClick(event, id)
}

function TableRows<TData>({
	rows,
	editHandler,
	deleteHandler,
	handleSelectClick,
	orderType,
	orderBy,
	page,
	rowsPerPage,
	selected = [],
	columns,
	classes
}: IProps<TData>): JSX.Element {
	const emptyRows: number = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	return (
		<React.Fragment>
			{(orderBy ? stableSort(rows, getSorting(orderType, orderBy)) : rows)
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row: ITableData<TData>) => {
					const isSelected: boolean = selected.includes(row.id.value)
					const rowNames: ReadonlyArray<keyof TData> = columns.map((c: ITableHeader<TData>) => c.id) as any

					return (
						<TableRow
							key={row.id.value}
							hover={true}
							tabIndex={-1}
							role="checkbox"
							selected={isSelected}
							aria-checked={isSelected}
							onClick={rowClickHandler(handleSelectClick, row.id.value)}
						>
							{!!handleSelectClick && (
								<TableCell padding="checkbox">
									<InputField inputType={InputTypes.Checkbox} checked={isSelected} />
								</TableCell>
							)}
							{rowNames
								.filter((rowName: keyof TData) => rowName !== "id")
								.map((rowName: keyof TData, i: number) => (
									<TableCell key={i} align={"center"} className={classes.tableCell}>
										{row[rowName].component}
									</TableCell>
								))}
							{!handleSelectClick && (
								<TableCell className={classes.tableCell}>
									{editHandler && (
										<div onClick={editHandler}>
											<EditIcon />
										</div>
									)}
									{deleteHandler && (
										<div onClick={deleteHandler(row.id.value as number)}>
											<TrashIcon />
										</div>
									)}
								</TableCell>
							)}
						</TableRow>
					)
				})}
			{emptyRows > 0 && (
				<TableRow style={{ height: emptyRows * Values.emptyRowHightMultiplier }}>
					<TableCell colSpan={Values.emptyRowSpan} />
				</TableRow>
			)}
		</React.Fragment>
	)
}

// TODO: Remove class
export default class WrappedTableRows<T> extends React.Component<
	WrappedTableRows<T>["C"] extends React.ComponentType<infer P> ? P : never,
	{}
> {
	private readonly C = materialThemeWrapper<IProps<T>>(
		withStyles(styles)((props: JSX.LibraryManagedAttributes<typeof TableRows, IProps<T>>) => (
			<TableRows<T> {...props} />
		))
	)
	public render() {
		return <this.C {...this.props} />
	}
}
