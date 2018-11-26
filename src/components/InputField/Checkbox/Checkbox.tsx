import * as React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiCheckbox from "@material-ui/core/Checkbox"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Checkbox = ({ value, classes, ...rest }: IProps) => (
	<MuiCheckbox
		value={value}
		classes={{
			root: classes.root,
			checked: classes.checked
		}}
		{...rest}
	/>
)

export default withStyles(styles)(Checkbox)
