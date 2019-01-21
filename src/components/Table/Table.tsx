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
import { IState } from "./__types/IState"
import { TableValues } from "./__types/TableValues"

import { styles } from "./styles"

class Table extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		const { orderBy, rowsPerPage } = props

		this.state = {
			orderBy,
			page: 0,
			orderType: "asc",
			rowsPerPage: rowsPerPage || TableValues.defaultRowsPerPage
		}

		this.onChangeRowsPerPage = this.onChangeRowsPerPage.bind(this)
	}

	public readonly handleRequestSort = (_event: MouseEvent, orderByUpdate: string): void => {
		const { onSortChange } = this.props
		const { orderBy, orderType } = this.state

		const orderTypeUpdate = orderBy === orderByUpdate && orderType === "desc" ? "asc" : "desc"

		this.setState({
			orderType: orderTypeUpdate,
			orderBy: orderByUpdate
		})

		onSortChange(orderByUpdate, orderTypeUpdate)
	}

	// Req by MUI for handler to be arrow
	public readonly handleChangePage = (_event: React.MouseEvent<HTMLButtonElement>, page: number): void => {
		const { onPageChange } = this.props
		const { rowsPerPage } = this.state

		onPageChange(page, rowsPerPage)

		this.setState({ page })
	}

	private onChangeRowsPerPage(selected: IDropDownData<number>): void {
		const { onRowsPerPageChange } = this.props
		const { page } = this.state

		const rowsPerPage = selected.value

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
						</MaterialTable>
					</ApiSuspense>
				</div>
				<Pagination
					page={page}
					count={count}
					rowsPerPage={rowsPerPage}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.onChangeRowsPerPage}
				/>
			</div>
		)
	}
}

export default materialThemeWrapper(withStyles(styles)(Table))
