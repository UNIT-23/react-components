import * as React from "react"
import TableCell from "@material-ui/core/TableCell"
import Tooltip from "@material-ui/core/Tooltip"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

import { IProps } from "./__types/IProps"
import { HeaderRowValues } from "./__types/HeaderRowValues"

import styles from "./styles/"

const createSortHandler: Function = (property: number, onRequestSort: Function): Function => (event: Event): void =>
	onRequestSort(event, property)

function HeaderRow({
	id,
	classes,
	numeric,
	disablePadding,
	label,
	orderBy,
	orderType,
	onRequestSort
}: IProps): JSX.Element {
	return (
		<TableCell
			numeric={numeric}
			className={classes.root}
			padding={disablePadding ? "none" : "default"}
			sortDirection={orderBy === id ? orderType : false}
		>
			<Tooltip
				title="Sort"
				placement={numeric ? "bottom-end" : "bottom-start"}
				enterDelay={HeaderRowValues.enterDelay}
				className={classes.toolTip}
			>
				<TableSortLabel
					className={classes.header}
					active={orderBy === id}
					direction={orderType}
					onClick={createSortHandler(id, onRequestSort)}
				>
					<Typography color="inherit" align="center" variant="caption">
						{label}
					</Typography>
				</TableSortLabel>
			</Tooltip>
		</TableCell>
	)
}

export default withStyles(styles)(HeaderRow)
