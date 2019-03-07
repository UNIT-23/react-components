import MUIDialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import * as React from "react"
import Button from "../Button/Button"
import { IProps } from "./__types/IProps"

const Dialog = ({ open, agreeHandler, disagreeHandler, onClose, children, title = "", agreeLabel = "Agree", disagreeLabel = "Disagree" }: IProps) => (
	<div>
		<MUIDialog open={open} onClose={onClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={disagreeHandler} type="delete">
					{disagreeLabel}
				</Button>
				<Button onClick={agreeHandler} autoFocus>
					{agreeLabel}
				</Button>
			</DialogActions>
		</MUIDialog>
	</div>
)

export default Dialog
