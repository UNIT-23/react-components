import React from "react"
import injectSheet from "react-jss"

import PlusIcon from "../Icons/PlusIcon"

import { Colors } from "../../theme"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Button = ({ children, addBtn, onClick, classes }: IProps) => (
	<>
		{addBtn ? (
			<div className={classes.addBtn} onClick={onClick}>
				<PlusIcon color={Colors.background} />
			</div>
		) : (
			<button className={classes.button} onClick={onClick}>
				{children}
			</button>
		)}
	</>
)

export default injectSheet(styles)(Button)
