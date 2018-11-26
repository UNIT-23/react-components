import * as React from "react"
import { connect } from "react-redux"
import injectSheet from "react-jss"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import IconButton from "@material-ui/core/IconButton"
import Slide, { SlideProps } from "@material-ui/core/Slide"

import Plus from "../Icons/Plus"
import AlertIcon from "../Icons/AlertIcon"

import { alertClose } from "../../appstate/actions/alert/alertActions"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

class Alert extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.handleClose = this.handleClose.bind(this)
	}

	public handleClose() {
		const { dispatch } = this.props

		dispatch(alertClose())
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
					autoHideDuration={3000}
					onClose={this.handleClose}
					TransitionComponent={(transitionProps: SlideProps) => (
						<Slide {...transitionProps} direction="left" />
					)}
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

export default connect(({ alert }: IRootState) => ({
	alertState: alert.alertState,
	message: alert.message,
	alertLevel: alert.alertLevel
}))(injectSheet(styles)(Alert))
