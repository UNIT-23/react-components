import * as React from "react"
import injectSheet from "react-jss"

import PlusIcon from "../../../../components/Icons/PlusIcon"
import InputField from "../../../../components/InputField/InputField"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

class DefaultBtn extends React.Component<IProps> {
	public render() {
		const { classes, handleSearch, filter } = this.props

		return (
			<div className={classes.container}>
				<div className={classes.input}>
					<InputField
						placeholder="Search"
						input={{
							onChange: handleSearch,
							value: filter
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

export default injectSheet(styles)(DefaultBtn)
