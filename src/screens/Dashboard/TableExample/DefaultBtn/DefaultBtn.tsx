import * as React from "react"
import { connect } from "react-redux"
import injectSheet from "react-jss"

import PlusIcon from "../../../../components/Icons/PlusIcon"
import InputField from "../../../../components/InputField/InputField"

import { postsGetRequest } from "../../../../appstate/actions/posts/postsActions"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles/"

class DefaultBtn extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			searchValue: ""
		}

		this.handleSearch = this.handleSearch.bind(this)
	}

	public handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
		const { dispatch } = this.props
		const { value } = event.target

		this.setState({
			searchValue: value
		})

		dispatch(postsGetRequest({ filter: value }))
	}

	public render() {
		const { classes } = this.props
		const { searchValue } = this.state

		return (
			<div className={classes.container}>
				<div className={classes.input}>
					<InputField
						placeholder="Search"
						input={{
							onChange: this.handleSearch,
							value: searchValue
						}}
					/>
				</div>
				<div className={classes.addContainer}>
					<PlusIcon />
				</div>
			</div>
		)
	}
}

export default connect()(injectSheet(styles)(DefaultBtn))
