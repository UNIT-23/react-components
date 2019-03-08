import { withStyles, withTheme } from "@material-ui/core"
import MaterialTable from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import * as React from "react"
import ApiSuspense from "../ApiSuspense/ApiSuspense"
import materialThemeWrapper from "../MaterialThemeWrapper/MaterialThemeWrapper"
import EnhancedTableHead from "./EnhancedTableHead/EnhancedTableHead"
import EnhancedToolbar from "./EnhancedToolbar/EnhancedToolbar"
import Pagination from "./Pagination/Pagination"
import { styles } from "./styles"
import TableRows from "./TableRows/TableRows"
import { IProps } from "./__types/IProps"

class Table<TData extends IDefaultDataType> extends React.Component<IProps<TData>> {
	public render () {
		const {
			classes,
			count,
			dataRequestState,
			DefaultBtn,
			deleteHandler,
			editHandler,
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
			SearchBar,
			selected,
			SelectedBtn,
			tableTitle
		} = this.props

		return (
			<div className={classes.root}>
				{!!tableTitle && (
					<EnhancedToolbar
						DefaultBtn={DefaultBtn}
						SelectedBtn={SelectedBtn}
						SearchBar={SearchBar}
						tableTitle={tableTitle}
						numSelected={selected ? selected.length : 0}
					/>
				)}
				<div className={classes.tableWrapper}>
					<ApiSuspense apiState={dataRequestState}>
						<MaterialTable className={classes.table}>
							<EnhancedTableHead<TData>
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
								<TableRows<TData>
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
				{!!rowsPerPage && (
					<Pagination
						page={page}
						count={count}
						rowsPerPage={rowsPerPage}
						onChangePage={onChangePage}
						onChangeRowsPerPage={onChangeRowsPerPage}
					/>
				)}
			</div>
		)
	}
}

// TODO: Remove class
// tslint:disable-next-line:max-classes-per-file
export default class WrappedGenericComponent<T extends IDefaultDataType> extends React.Component<
	WrappedGenericComponent<T>["C"] extends React.ComponentType<infer P> ? P : never,
	{}
	> {
	private readonly C = materialThemeWrapper<IProps<T>>(
		withTheme()(withStyles(styles)((props: JSX.LibraryManagedAttributes<typeof Table, IProps<T>>) => <Table<T> {...props} />))
	)
	public render () {
		return <this.C {...this.props} />
	}
}
