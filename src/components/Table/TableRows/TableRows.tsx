import * as React from "react"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { withStyles } from "@material-ui/core/styles"

import InputField from "../../InputField/InputField"

import { IProps } from "./__types/IProps"
import { IRow } from "../__types/IRow"
import { Values } from "./__types/Values"

import styles from "./styles/"
import { IHead } from "../__types/IHead"

function stableSort<TRow extends IRow>(
	array: ReadonlyArray<TRow>,
	cmp: (a: TRow, b: TRow) => number
): ReadonlyArray<TRow> {
	const stabilizedThis: ReadonlyArray<ReadonlyArray<TRow | number>> = array
		.map((el: TRow, index: number) => [el, index])
		.sort((a: ReadonlyArray<TRow | number>, b: ReadonlyArray<TRow | number>) => {
			const orderType: number = cmp(a[0] as TRow, b[0] as TRow)

			return orderType !== 0 ? orderType : (a[1] as number) - (b[1] as number)
		})

	return stabilizedThis.map((el: ReadonlyArray<TRow | number>) => el[0] as TRow)
}

function getSorting<TRow extends IRow>(orderType: "asc" | "desc", orderBy: string): (a: TRow, b: TRow) => number {
	return orderType === "desc"
		? (a: TRow, b: TRow): number => desc(a, b, orderBy)
		: (a: TRow, b: TRow): number => -desc(a, b, orderBy)
}

function desc<TRow extends IRow>(a: TRow, b: TRow, orderBy: string): number {
	return b[orderBy].value < a[orderBy].value ? -1 : b[orderBy].value > a[orderBy].value ? 1 : 0
}

function rowClickHandler(
	handleClick: Function,
	id: number | string
): ((event: React.MouseEvent<HTMLTableRowElement>) => void) | undefined {
	return (event: React.MouseEvent<HTMLTableRowElement>): Function => handleClick && handleClick(event, id)
}

function TableRows<TRow extends IRow, THead extends IHead>({
	rows,
	classes,
	handleSelectClick,
	orderType,
	orderBy,
	page,
	rowsPerPage,
	selected,
	columns
}: IProps<TRow, THead>): JSX.Element {
	const emptyRows: number = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	return (
		<React.Fragment>
			{stableSort(rows, getSorting(orderType, orderBy))
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row: TRow) => {
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
									const isNumeric: boolean = columns.find((c: THead) => c.id === rowName).numeric

									return (
										<TableCell className={classes.tableCell} key={i} numeric={isNumeric}>
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
	selected: []
}

export default withStyles(styles)(TableRows)
