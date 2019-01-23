import React from "react"
import injectSheet from "react-jss"

import PlusIcon from "../Icons/PlusIcon"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Button = ({ children, addBtn, onClick, classes, theme }: IProps) => (
	<>
		{addBtn ? (
			<div className={classes.addBtn} onClick={onClick}>
				<PlusIcon color={theme.backgroundColor} />
			</div>
		) : (
			<button className={classes.button} onClick={onClick}>
				{children}
			</button>
		)}
	</>
)

export default injectSheet(styles)(Button)
