import React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Button = ({ children, classes, ...rest }: IProps) => (
	<button className={classes.button} {...rest}>
		{children}
	</button>
)

export default injectSheet(styles)(Button)
