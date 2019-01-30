import React from "react"
import injectSheet from "react-jss"

import PlusIcon from "../Icons/PlusIcon"
import { IProps } from "./__types/IProps"

import { styles } from "./styles"

function Button({ children, type, onClick, classes, theme }: IProps) {
	switch (type) {
		case "create":
			return (
				<div className={classes.addBtn} onClick={onClick}>
					<PlusIcon color={theme.secondary} className={classes.icon} />
					<div className={classes.span}>{children} </div>
				</div>
			)
			break
		case "small":
			return (
				<button className={classes.outline} onClick={onClick}>
					{children}
				</button>
			)
		case "delete":
			return (
				<button className={classes.danger} onClick={onClick}>
					{children}
				</button>
			)
		default:
			return (
				<button className={classes.button} onClick={onClick}>
					{children}
				</button>
			)
	}
}

export default injectSheet(styles)(Button)
