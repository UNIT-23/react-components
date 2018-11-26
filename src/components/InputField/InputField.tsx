import React from "react"
import useSheet from "react-jss"
// @ts-ignore
import { CheckboxSelect } from "@atlaskit/select"

import Switch from "./Switch/Switch"
import Checkbox from "./Checkbox/Checkbox"

import { styles, selectStyles } from "./styles"

import { IProps } from "./__types/IProps"

const InputField = ({ input: { onBlur, ...restInput }, inputType, meta: { error }, classes, ...rest }: IProps) => {
	switch (inputType) {
		case "select":
			return (
				<CheckboxSelect
					onBlur={onBlur}
					styles={selectStyles}
					{...restInput}
					{...rest}
					invalidMessage={error}
					className="checkbox-select"
					classNamePrefix="select"
				/>
			)
		case "textarea":
			return <textarea onBlur={onBlur} {...restInput} {...rest} className={classes.textarea} />
		case "switch":
			return <Switch onBlur={onBlur} {...restInput} {...rest} />
		case "checkbox":
			return <Checkbox onBlur={onBlur} {...restInput} {...rest} />
		default:
			return <input onBlur={onBlur} {...restInput} {...rest} className={classes.input} />
	}
}

// tslint:disable-next-line:no-object-mutation
InputField.defaultProps = {
	input: {
		onBlur: () => {},
		onChange: () => {},
		onDragStart: () => {},
		onDrop: () => {},
		onFocus: () => {},
		value: "",
		name: ""
	},
	meta: {
		autofilled: false,
		asyncValidating: false,
		dirty: false,
		// tslint:disable-next-line:no-any
		dispatch: (action: any) => action,
		form: "",
		initial: "",
		invalid: false,
		pristine: true,
		submitting: false,
		submitFailed: false,
		touched: false,
		valid: true,
		visited: false
	}
}

export default useSheet(styles)(InputField) as InputField<IProps>
