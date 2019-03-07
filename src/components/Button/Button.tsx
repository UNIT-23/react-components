import React from "react"
import injectSheet from "react-jss"
import PlusIcon from "../Icons/PlusIcon"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"

function Button ({ children, type, onClick, autoFocus, classes, theme }: IProps) {
	switch (type) {
	case "create":
		return (
			<div className={classes.addBtn} onClick={onClick}>
				<PlusIcon color={theme.secondary} className={classes.icon} />
				<div className={classes.span}>Create</div>
			</div>
		)
		break
	case "small":
		return (
			<button className={classes.outline} onClick={onClick} autoFocus={autoFocus}>
				{children}
			</button>
		)
	case "delete":
		return (
			<button className={classes.danger} onClick={onClick} autoFocus={autoFocus}>
				{children}
			</button>
		)
	default:
		return (
			<button className={classes.button} onClick={onClick} autoFocus={autoFocus}>
				{children}
			</button>
		)
	}
}

export default injectSheet(styles)(Button)
