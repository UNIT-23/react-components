import * as React from "react"
import MuiDrawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles/"

class Drawer extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			isModelOpen: false
		}

		this.toggleDrawer = this.toggleDrawer.bind(this)
	}

	public toggleDrawer() {
		this.setState({
			isModelOpen: false
		})
	}

	public render() {
		const { openModel, children, closeDrawer, classes } = this.props

		return (
			<MuiDrawer
				transitionDuration={{ enter: 400, exit: 400 }}
				anchor="right"
				open={openModel}
				onClose={closeDrawer}
			>
				<div className={classes.list}>
					<List>{children}</List>
				</div>
			</MuiDrawer>
		)
	}
}

export default injectSheet(styles)(Drawer)
