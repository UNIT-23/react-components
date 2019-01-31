import * as React from "react"
import TableCell from "@material-ui/core/TableCell"
import Tooltip from "@material-ui/core/Tooltip"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Typography from "@material-ui/core/Typography"

import { HeaderRowValues } from "./__types/HeaderRowValues"

import { IProps } from "./__types/IProps"

const createSortHandler: Function = (property: number, onRequestSort: Function): Function => (event: Event): void =>
	onRequestSort(event, property)

function HeaderRow<TData>({ id, label, orderBy, orderType, onRequestSort }: IProps<TData>): JSX.Element {
	return (
		<TableCell sortDirection={orderBy === id ? orderType : false}>
			{!!onRequestSort && (
				<Tooltip title="Sort" enterDelay={HeaderRowValues.enterDelay}>
					<TableSortLabel
						active={orderBy === id}
						direction={orderType}
						onClick={createSortHandler(id, onRequestSort)}
					>
						<Typography color="inherit" align="center" variant="caption">
							{label}
						</Typography>
					</TableSortLabel>
				</Tooltip>
			)}
		</TableCell>
	)
}

export default HeaderRow
