import * as React from "react"

import { tableDataFormatter } from "../../../utils/tableDataFormatter"

import { IProps } from "./__types/IProps"

import { setRowsPerPage, setTableSearchFilter } from "../../../appstate/tables/actions/tablesActions"

export class TableModel<TProps extends IProps, TState = undefined> extends React.Component<TProps, TState> {
	public constructor(props: TProps) {
		super(props)

		this.onChangePage = this.onChangePage.bind(this)
		this.onChangeSort = this.onChangeSort.bind(this)
		this.filterHandler = this.filterHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.onChangeRowsPerPage = this.onChangeRowsPerPage.bind(this)
	}

	// tslint:disable:no-any
	// tslint:disable-next-line:readonly-keyword
	public getAction: (payload: any) => IAction<any, any> = undefined
	// tslint:disable-next-line:readonly-keyword
	public deleteAction: (payload: { readonly id: number }) => IAction<{ readonly id: number }, string> = undefined

	public componentDidMount() {
		const { dispatch } = this.props

		dispatch(this.getAction({}))
	}

	public formatData<T>(data: ReadonlyArray<T>): ReadonlyArray<ITableData> {
		return data.map(tableDataFormatter)
	}

	public onChangePage(_event: React.MouseEvent<HTMLButtonElement>, nextPage: number) {
		const { rowsPerPage, dispatch } = this.props

		const nextOffset = nextPage * rowsPerPage

		dispatch(
			this.getAction({
				limit: rowsPerPage,
				offset: nextOffset
			})
		)
	}

	public onChangeRowsPerPage(selected: IDropDownData<number>): void {
		const { dispatch } = this.props

		const rowsPerPage = selected.value

		dispatch(setRowsPerPage(rowsPerPage))

		dispatch(
			this.getAction({
				limit: rowsPerPage,
				offset: 0
			})
		)
	}

	public onChangeSort(_event: MouseEvent, orderBy: string): void {
		const { rowsPerPage, dispatch } = this.props

		dispatch(
			this.getAction({
				orderBy,
				limit: rowsPerPage,
				offset: 0
			})
		)
	}

	public filterHandler(e: React.ChangeEvent<HTMLInputElement>): void {
		const { dispatch } = this.props
		const filter = e.target.value

		dispatch(setTableSearchFilter(filter))
		dispatch(this.getAction({}))
	}

	public deleteHandler(id: number): (event: React.MouseEvent<HTMLDivElement>) => void {
		const { dispatch } = this.props

		return () => {
			dispatch(this.deleteAction({ id }))
		}
	}
}
