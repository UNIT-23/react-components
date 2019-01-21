import * as React from "react"
import injectSheet from "react-jss"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import IconButton from "@material-ui/core/IconButton"

import materialThemeWrapper from "../MaterialThemeWrapper/MaterialThemeWrapper"

import AlertIcon from "../Icons/AlertIcon"
import Plus from "../Icons/PlusIcon"
import TransitionSlide from "./TransitionSlide/TransitionSlide"

import { closeAlert } from "../../appstate/actions/alert/alertActions"

import { IProps } from "./__types/IProps"
import { Values } from "./__types/Values"

import { styles } from "./styles/"

class Alert extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.handleClose = this.handleClose.bind(this)
	}

	public handleClose() {
		const { dispatch } = this.props

		dispatch(closeAlert())
	}

	public render() {
		const { alertState, message, classes } = this.props

		return (
			<div>
				<Snackbar
					anchorOrigin={{
						vertical: "top",
						horizontal: "right"
					}}
					open={alertState}
					autoHideDuration={Values.autoHideDuration}
					onClose={this.handleClose}
					TransitionComponent={TransitionSlide}
				>
					<SnackbarContent
						className={classes.content}
						aria-describedby="client-snackbar"
						message={
							<span id="client-snackbar" className={classes.messageContainer}>
								<AlertIcon />
								<div className={classes.message}>{message}</div>
							</span>
							// tslint:disable-next-line:jsx-curly-spacing
						}
						action={[
							<IconButton
								onClick={this.handleClose}
								key="close"
								aria-label="Close"
								color="inherit"
								className={classes.close}
							>
								<Plus />
							</IconButton>
						]}
					/>
				</Snackbar>
			</div>
		)
	}
}

export default materialThemeWrapper(injectSheet(styles)(Alert))
