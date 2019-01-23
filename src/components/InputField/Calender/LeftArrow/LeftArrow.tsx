import React from "react"

import Left from "../../../Icons/ChevronLeftIcon"
import injectSheet from "react-jss"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"

const  LeftArrow = ({classes}: IProps) =>
	(
		<div  className={classes.myLeftArrow}>
			<Left />
		</div>
	)

export default injectSheet(styles)(LeftArrow)
