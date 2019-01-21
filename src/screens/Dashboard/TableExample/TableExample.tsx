// TODO: Move to ReadonlyArray
// tslint:disable:readonly-array
// tslint:disable:no-let
import * as React from "react"

import Table from "../../../components/Table/Table"

import DefaultBtn from "./DefaultBtn/DefaultBtn"
import SelectedBtn from "./SelectedBtn/SelectedBtn"

import { API } from "../../../models/ApiState"

import { tableDataFormatter } from "../../../utils/tableDataFormatter"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { connect } from "react-redux"
import { postsGetRequest } from "../../../appstate/actions/posts/postsActions"

const header: ReadonlyArray<ITableHeader> = [
	{ id: "firstname", align: "center", disablePadding: false, label: "Firstname" },
	{ id: "lastname", align: "center", disablePadding: false, label: "Lastname" },
	{ id: "email", align: "center", disablePadding: false, label: "Email" },
	{ id: "phone", align: "center", disablePadding: false, label: "Phone" },
	{ id: "hasPremium", align: "center", disablePadding: false, label: "Premium" }
]

class TableExampleComponent extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			selected: [],
			selectedIds: [],
			currentPage: 0,
			searchValue: ""
		}

		this.onPageChange = this.onPageChange.bind(this)
		this.onRowsPerPageChange = this.onRowsPerPageChange.bind(this)
	}

	public componentDidMount() {
		const { dispatch } = this.props

		dispatch(postsGetRequest({}))
	}

	public onPageChange(nextPage: number, rowsPerPage: number) {
		const { posts, dispatch } = this.props
		const { currentPage } = this.state

		this.setState({ selected: [], currentPage: nextPage })

		const onNextPage = nextPage > currentPage
		const nextOffset = nextPage * rowsPerPage

		const navOutOfRangeOfData = nextOffset >= posts.length

		if (onNextPage && navOutOfRangeOfData) {
			dispatch(
				postsGetRequest({
					offset: nextOffset,
					limit: rowsPerPage
				})
			)
		}
	}

	public onRowsPerPageChange(_page: number, rowsPerPage: number) {
		const { dispatch } = this.props

		this.setState({ selected: [] })

		dispatch(
			postsGetRequest({
				offset: 0,
				limit: rowsPerPage
			})
		)
	}

	public formatData(data: ReadonlyArray<IPost>): ReadonlyArray<ITableData> {
		return (
			data
				.map(tableDataFormatter)
				// tslint:disable-next-line:no-any
				.map((d: any) => ({
					...d,
					hasPremium: {
						...d.hasPremium,
						component: d.hasPremium.value ? "Premium" : "Trial"
					}
				}))
		)
	}

	public render() {
		const { posts } = this.props
		const { selectedIds } = this.state

		return (
			<Table
				count={90}
				dataRequestState={API.REQUEST_SUCCESS}
				tableTitle={<div>Merchants</div>}
				DefaultBtn={<DefaultBtn />}
				SelectedBtn={<SelectedBtn />}
				onPageChange={this.onPageChange}
				onRowsPerPageChange={this.onRowsPerPageChange}
				selected={selectedIds}
				header={header}
				rows={this.formatData(posts)}
			/>
		)
	}
}

export default connect(({ posts }: IRootState) => ({
	posts: posts.posts,
	postsCount: posts.postsCount
}))(TableExampleComponent)
