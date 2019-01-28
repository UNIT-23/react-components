import * as React from "react"
import { withStyles } from "@material-ui/core/styles"
import MaterialTable from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"

import EnhancedTableHead from "./EnhancedTableHead/EnhancedTableHead"
import EnhancedToolbar from "./EnhancedToolbar/EnhancedToolbar"
import TableRows from "./TableRows/TableRows"
import Pagination from "./Pagination/Pagination"

import materialThemeWrapper from "../MaterialThemeWrapper/MaterialThemeWrapper"

import ApiSuspense from "../ApiSuspense/ApiSuspense"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Table: React.SFC<IProps> = ({
	count,
	editHandler,
	deleteHandler,
	dataRequestState,
	DefaultBtn,
	handleSelectAllClick,
	handleSelectClick,
	header,
	onChangePage,
	onChangeRowsPerPage,
	onChangeSort,
	orderBy,
	orderType,
	page,
	rows,
	rowsPerPage,
	selected,
	SelectedBtn,
	tableTitle,
	classes
}: IProps) => (
	<div className={classes.root}>
		<EnhancedToolbar
			DefaultBtn={DefaultBtn}
			SelectedBtn={SelectedBtn}
			tableTitle={tableTitle}
			numSelected={selected ? selected.length : 0}
		/>
		<div className={classes.tableWrapper}>
			<ApiSuspense apiState={dataRequestState}>
				<MaterialTable className={classes.table}>
					<EnhancedTableHead
						numSelected={selected ? selected.length : 0}
						columns={header}
						orderType={orderType}
						orderBy={orderBy}
						handleSelectClick={handleSelectClick}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={onChangeSort}
						rowCount={rows.length}
					/>
					<TableBody>
						<TableRows
							columns={header}
							deleteHandler={deleteHandler}
							editHandler={editHandler}
							handleSelectClick={handleSelectClick}
							orderBy={orderBy}
							orderType={orderType}
							page={page}
							rows={rows}
							rowsPerPage={rowsPerPage}
							selected={selected}
						/>
					</TableBody>
				</MaterialTable>
			</ApiSuspense>
		</div>
		<Pagination
			page={page}
			count={count}
			rowsPerPage={rowsPerPage}
			onChangePage={onChangePage}
			onChangeRowsPerPage={onChangeRowsPerPage}
		/>
	</div>
)

export default materialThemeWrapper(withStyles(styles)(Table))
