import * as React from "react"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { withStyles } from "@material-ui/core/styles"

import InputField from "../../InputField/InputField"

import { IProps } from "./__types/IProps"
import { Values } from "./__types/Values"
import { InputTypes } from "../../../models/InputTypes"

import { styles } from "./styles/"

function stableSort(
	array: ReadonlyArray<ITableData>,
	cmp: (a: ITableData, b: ITableData) => number
): ReadonlyArray<ITableData> {
	const stabilizedThis: ReadonlyArray<ReadonlyArray<ITableData | number>> = array
		.map((el: ITableData, index: number) => [el, index])
		.sort((a: ReadonlyArray<ITableData | number>, b: ReadonlyArray<ITableData | number>) => {
			const orderType: number = cmp(a[0] as ITableData, b[0] as ITableData)

			return orderType !== 0 ? orderType : (a[1] as number) - (b[1] as number)
		})

	return stabilizedThis.map((el: ReadonlyArray<ITableData | number>) => el[0] as ITableData)
}

function getSorting(orderType: "asc" | "desc", orderBy: string): (a: ITableData, b: ITableData) => number {
	return orderType === "desc"
		? (a: ITableData, b: ITableData): number => desc(a, b, orderBy)
		: (a: ITableData, b: ITableData): number => -desc(a, b, orderBy)
}

function desc(a: ITableData, b: ITableData, orderBy: string): number {
	return b[orderBy].value < a[orderBy].value ? -1 : b[orderBy].value > a[orderBy].value ? 1 : 0
}

function rowClickHandler(
	handleClick: Function,
	id: number | string
): ((event: React.MouseEvent<HTMLTableRowElement>) => void) | undefined {
	return (event: React.MouseEvent<HTMLTableRowElement>): Function => handleClick && handleClick(event, id)
}

function TableRows<THead extends ITableHeader>({
	rows,
	classes,
	handleSelectClick,
	orderType,
	orderBy,
	page,
	rowsPerPage,
	selected,
	columns
}: IProps<THead>): JSX.Element {
	const emptyRows: number = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	return (
		<React.Fragment>
			{stableSort(rows, getSorting(orderType, orderBy))
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row: ITableData) => {
					const isSelected: boolean = selected.includes(row.id.value as React.ReactText)
					const rowNames: ReadonlyArray<string> = columns.map((c: THead) => c.id)

					return (
						<TableRow
							key={row.id.value as React.ReactText}
							hover={true}
							tabIndex={-1}
							role="checkbox"
							selected={isSelected}
							aria-checked={isSelected}
							onClick={rowClickHandler(handleSelectClick, row.id.value as React.ReactText)}
						>
							{!!handleSelectClick && (
								<TableCell padding="checkbox">
									<InputField inputType={InputTypes.Checkbox} checked={isSelected} />
								</TableCell>
							)}
							{rowNames
								.filter((rowName: string) => rowName !== "id")
								.map((rowName: string, i: number) => {
									const align: "left" | "center" | "right" | "justify" = columns.find(
										// Length
										(c: THead) => c.id === rowName
									).align

									return (
										<TableCell className={classes.tableCell} key={i} align={align}>
											{row[rowName as string].component}
										</TableCell>
									)
								})}
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

// tslint:disable-next-line:no-object-mutation
TableRows.defaultProps = {
	selected: [] as ReadonlyArray<number | string>
}

export default withStyles(styles)(TableRows)
