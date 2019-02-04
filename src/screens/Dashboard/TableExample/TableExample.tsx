import * as React from "react"
import { connect } from "react-redux"

import Table from "../../../components/Table/Table"
import { TableModel } from "../../../components/Table/models/TableModel"

import DefaultBtn from "./DefaultBtn/DefaultBtn"
import SelectedBtn from "./SelectedBtn/SelectedBtn"

import { postsGetRequest } from "../../../appstate/actions/posts/postsActions"

import { API } from "../../../models/ApiState"

import { IProps } from "./__types/IProps"

const header: ReadonlyArray<ITableHeader<IPost>> = [
	{ id: "firstname", label: "Firstname" },
	{ id: "lastname", label: "Lastname" },
	{ id: "email", label: "Email" },
	{ id: "phone", label: "Phone" },
	{ id: "hasPremium", label: "Premium" }
]

class TableExampleComponent extends TableModel<IPost, IProps> {
	public constructor(props: IProps) {
		super(props)

		this.getAction = postsGetRequest
	}

	public formatData(data: ReadonlyArray<IPost>): ReadonlyArray<ITableData<IPost>> {
		return super.formatData(data).map((d: ITableData<IPost>) => ({
			...d,
			hasPremium: {
				...d.hasPremium,
				component: d.hasPremium.value ? "Premium" : "Trial"
			}
		}))
	}

	public render() {
		const { posts, page, rowsPerPage, filter, orderBy, orderType, postsCount } = this.props

		return (
			<Table<IPost>
				count={postsCount}
				page={page}
				editHandler={this.editHandler}
				deleteHandler={this.deleteHandler}
				header={header}
				orderBy={orderBy}
				orderType={orderType}
				rowsPerPage={rowsPerPage}
				SelectedBtn={<SelectedBtn />}
				rows={this.formatData(posts)}
				onChangePage={this.onChangePage}
				onChangeSort={this.onChangeSort}
				tableTitle={<div>Merchants</div>}
				dataRequestState={API.REQUEST_SUCCESS}
				onChangeRowsPerPage={this.onChangeRowsPerPage}
				DefaultBtn={<DefaultBtn handleSearch={this.filterHandler} filter={filter} />}
			/>
		)
	}
}

export default connect(({ posts, tables }: IRootState) => ({
	page: posts.page,
	posts: posts.posts,
	filter: tables.filter,
	orderBy: posts.orderBy,
	orderType: posts.orderType,
	postsCount: posts.postsCount,
	rowsPerPage: tables.rowsPerPage,
	postsGetError: posts.postsGetError,
	postsGetRequestState: posts.postsGetRequestState
}))(TableExampleComponent)
