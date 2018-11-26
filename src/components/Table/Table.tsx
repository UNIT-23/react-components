import * as React from "react"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper"

import Pagination from "./Pagination/Pagination"
import EnhancedTableHead from "./EnhancedTableHead/EnhancedTableHead"
import EnhancedToolbar from "./EnhancedToolbar/EnhancedToolbar"
import TableRows from "./TableRows/TableRows"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { TableValues } from "./__types/TableValues"

import { styles } from "./styles"
import ApiSuspense from "../ApiSuspense/ApiSuspense"

class EnhancedTable extends React.Component<IProps, IState> {
	public readonly state: IState = {
		orderType: "asc",
		orderBy: "id" as string,
		page: 0,
		rowsPerPage: this.props.rowsPerPage || TableValues.defaultRowsPerPage
	}

	public readonly handleRequestSort = (_event: MouseEvent, orderByUpdate: string): void => {
		const { orderBy, orderType } = this.state

		this.setState({
			orderType: orderBy === orderByUpdate && orderType === "desc" ? "asc" : "desc",
			orderBy: orderByUpdate
		})
	}

	// Req by MUI for handler to be arrow
	public readonly handleChangePage = (_event: React.MouseEvent<HTMLButtonElement>, page: number): void => {
		const { onPageChange } = this.props
		const { rowsPerPage } = this.state

		onPageChange(page, rowsPerPage)

		this.setState({ page })
	}

	// Req by MUI for handler to be arrow
	public readonly handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	): void => {
		const { onRowsPerPageChange } = this.props
		const { page } = this.state
		const rowsPerPage: number = Number(event.target.value)

		onRowsPerPageChange(page, rowsPerPage)

		this.setState({ page: 0, rowsPerPage })
	}

	public render(): JSX.Element {
		const {
			rows,
			header,
			tableTitle,
			DefaultBtn,
			SelectedBtn,
			dataRequestState,
			handleSelectAllClick,
			handleSelectClick,
			selected,
			count,
			classes
		} = this.props
		const { orderType, orderBy, rowsPerPage, page } = this.state

		return (
			<Paper square={true} className={classes.root}>
				<EnhancedToolbar
					DefaultBtn={DefaultBtn}
					SelectedBtn={SelectedBtn}
					tableTitle={tableTitle}
					numSelected={selected ? selected.length : 0}
				/>
				<div className={classes.tableWrapper}>
					<ApiSuspense apiState={dataRequestState}>
						<Table className={classes.table}>
							<EnhancedTableHead
								numSelected={selected ? selected.length : 0}
								columns={header}
								orderType={orderType}
								orderBy={orderBy}
								handleSelectClick={handleSelectClick}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={this.handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								<TableRows
									rows={rows}
									columns={header}
									handleSelectClick={handleSelectClick}
									orderType={orderType}
									orderBy={orderBy}
									page={page}
									rowsPerPage={rowsPerPage}
									selected={selected}
								/>
							</TableBody>
						</Table>
					</ApiSuspense>
				</div>
				<Pagination
					component="div"
					count={count}
					rowsPerPage={rowsPerPage}
					currentPage={page}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</Paper>
		)
	}
}

export default withStyles(styles)(EnhancedTable)
