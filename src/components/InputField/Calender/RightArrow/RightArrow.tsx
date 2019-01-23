import * as React from "react"

import Right from "../../../Icons/ChevronRightIcon"

import injectSheet from "react-jss"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"

const RightArrow = ({classes, range}: IProps) =>
		(
			<div className={range ? classes.rangeArrow : classes.myArrow}>
				<Right />
			</div>
		)

export default injectSheet(styles)(RightArrow)
