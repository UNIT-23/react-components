import * as React from "react"
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
import { withStyles } from "@material-ui/core"

class Table<TData> extends React.Component<IProps<TData>> {
	public render() {
		return (
			<div className={this.props.classes.root}>
				<EnhancedToolbar
					DefaultBtn={this.props.DefaultBtn}
					SelectedBtn={this.props.SelectedBtn}
					tableTitle={this.props.tableTitle}
					numSelected={this.props.selected ? this.props.selected.length : 0}
				/>
				<div className={this.props.classes.tableWrapper}>
					<ApiSuspense apiState={this.props.dataRequestState}>
						<MaterialTable className={this.props.classes.table}>
							<EnhancedTableHead<TData>
								numSelected={this.props.selected ? this.props.selected.length : 0}
								columns={this.props.header}
								orderType={this.props.orderType}
								orderBy={this.props.orderBy}
								handleSelectClick={this.props.handleSelectClick}
								onSelectAllClick={this.props.handleSelectAllClick}
								onRequestSort={this.props.onChangeSort}
								rowCount={this.props.rows.length}
							/>
							<TableBody>
								<TableRows<TData>
									columns={this.props.header}
									deleteHandler={this.props.deleteHandler}
									editHandler={this.props.editHandler}
									handleSelectClick={this.props.handleSelectClick}
									orderBy={this.props.orderBy}
									orderType={this.props.orderType}
									page={this.props.page}
									rows={this.props.rows}
									rowsPerPage={this.props.rowsPerPage}
									selected={this.props.selected}
								/>
							</TableBody>
						</MaterialTable>
					</ApiSuspense>
				</div>
				<Pagination
					page={this.props.page}
					count={this.props.count}
					rowsPerPage={this.props.rowsPerPage}
					onChangePage={this.props.onChangePage}
					onChangeRowsPerPage={this.props.onChangeRowsPerPage}
				/>
			</div>
		)
	}
}

// TODO: Remove class
// tslint:disable-next-line:max-classes-per-file
export default class WrappedGenericComponent<T> extends React.Component<
	WrappedGenericComponent<T>["C"] extends React.ComponentType<infer P> ? P : never,
	{}
> {
	private readonly C = materialThemeWrapper<IProps<T>>(
		withStyles(styles)((props: JSX.LibraryManagedAttributes<typeof Table, IProps<T>>) => <Table<T> {...props} />)
	)
	public render() {
		return <this.C {...this.props} />
	}
}
