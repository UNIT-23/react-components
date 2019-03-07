import { withStyles } from "@material-ui/core"
import MuiCheckbox from "@material-ui/core/Checkbox"
import * as React from "react"
import { styles } from "./styles"
import { IProps } from "./__types/IProps"

const Checkbox = ({ classes, color, onBlur, onChange, value, checked, ...rest }: IProps) => (
	<MuiCheckbox
		checked={checked}
		onChange={onChange}
		classes={{
			root   : classes.root,
			checked: classes.checked
		}}
		{...rest}
	/>
)

export default withStyles(styles)(Checkbox)
