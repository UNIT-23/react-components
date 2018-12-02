import * as React from "react"
import { withStyles } from "@material-ui/core"
import MuiCheckbox from "@material-ui/core/Checkbox"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Checkbox = ({ value, classes, color, ...rest }: IProps) => (
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
