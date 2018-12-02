import * as React from "react"
import { Typography } from "@material-ui/core"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"

import HeaderRows from "./HeaderRows/HeaderRows"

import InputField from "../../InputField/InputField"

import { InputTypes } from "../../../models/InputTypes"

import { IProps } from "./__types/IProps"
import { IHead } from "../__types/IHead"

function EnhancedTableHead<THead extends IHead>({
	handleSelectClick,
	onSelectAllClick,
	onRequestSort,
	orderType,
	orderBy,
	numSelected,
	rowCount,
	columns
}: IProps<THead>): JSX.Element {
	return (
		<TableHead>
			<TableRow>
				{!!onSelectAllClick && (
					<TableCell padding="checkbox">
						<InputField inputType={InputTypes.Checkbox} checked={numSelected === rowCount} />
					</TableCell>
				)}
				{!!handleSelectClick &&
					!onSelectAllClick && (
						<TableCell padding="checkbox">
							<Typography color="inherit" align="center" variant="subtitle1">
								Select
							</Typography>
						</TableCell>
					)}
				<HeaderRows rows={columns} orderBy={orderBy} orderType={orderType} onRequestSort={onRequestSort} />
			</TableRow>
		</TableHead>
	)
}

export default EnhancedTableHead
