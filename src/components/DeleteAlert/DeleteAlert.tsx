import React from "react"
import Button from "../Button/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"

import Trash from "../Icons/TrashIcon"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import injectSheet from "react-jss"
import { styles } from "./styles"

function Transition(props: IProps) {
  return <Slide direction="left" {...props} />
}

class AlertDialogSlide extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
	super(props)
	this.state = {
		open: false
	}

	this.handleClickOpen = this.handleClickOpen.bind(this)
	this.handleClose = this.handleClose.bind(this)
  }

  public readonly handleClickOpen = () => {
	this.setState({ open: true })
  }

  public readonly handleClose = () => {
	this.setState({ open: false })
  }

  public render() {
		const {classes, handleClose, handleOpen, open} = this.props

	 return (
		<div>
		<Button onClick={handleOpen || this.handleClickOpen}>delete</Button>
		<Dialog
			open={open || this.state.open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose || this.handleClose}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
			classes={{
				paper: classes.paper,
				container: classes.container
			}}
		>
			<div className={classes.trash} ><Trash /></div>
			<DialogTitle
				classes={{root: classes.root}}
				id="alert-dialog-slide-title"
			>
			<div className={classes.title}>{"Are you Sure you want to delete this store?"}</div>
			</DialogTitle>
			<DialogContent classes={{root: classes.root}}>
			<DialogContentText
				id="alert-dialog-slide-description"
				classes={{
				root: classes.text
			}}
			>
				Deleting the store will also delete its custom departments,
				positions, tasks, benefits, exemptions and budgets and time
				off requests
			</DialogContentText>
			</DialogContent>
			<DialogActions>
			<Button type="delete" outline onClick={handleClose || this.handleClose}>
				Disagree
			</Button>
				<Button type="delete" onClick={handleClose || this.handleClose}>
				Agree
			</Button>
			</DialogActions>
		</Dialog>
		</div>
	)
  }
}

export default injectSheet(styles)(AlertDialogSlide)
