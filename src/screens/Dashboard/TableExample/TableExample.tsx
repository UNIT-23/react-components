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
	{ id: "postId", numeric: false, disablePadding: false, label: "ID" },
	{ id: "name", numeric: false, disablePadding: false, label: "Name" },
	{ id: "email", numeric: false, disablePadding: false, label: "Email" },
	{ id: "body", numeric: false, disablePadding: false, label: "Message" }
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
		this.handleSelectClick = this.handleSelectClick.bind(this)
		this.onRowsPerPageChange = this.onRowsPerPageChange.bind(this)
	}

	public componentDidMount() {
		const { dispatch } = this.props

		dispatch(postsGetRequest({}))
	}

	public handleSelectClick(_event: React.ChangeEvent, id: number) {
		const { posts } = this.props
		const { selectedIds } = this.state

		const selectedIndex = selectedIds.indexOf(id)

		let newSelected: number[] = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selectedIds, id)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selectedIds.slice(1))
		} else if (selectedIndex === selectedIds.length - 1) {
			newSelected = newSelected.concat(selectedIds.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selectedIds.slice(0, selectedIndex), selectedIds.slice(selectedIndex + 1))
		}

		this.setState({
			selected: newSelected.map((selectedId: number) => posts.find((m: IPost) => m.id === selectedId)),
			selectedIds: [...newSelected]
		})
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

	public formatData(data: ReadonlyArray<IPost>) {
		return data.map(tableDataFormatter)
	}

	public render() {
		const { posts, postsCount } = this.props
		const { selectedIds } = this.state

		return (
			<Table
				count={postsCount}
				dataRequestState={API.REQUEST_SUCCESS}
				tableTitle="Merchants"
				DefaultBtn={<DefaultBtn />}
				SelectedBtn={<SelectedBtn />}
				handleSelectClick={this.handleSelectClick}
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
