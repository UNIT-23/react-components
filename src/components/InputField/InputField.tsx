import React from "react"
import injectSheet from "react-jss"
// @ts-ignore
import { CheckboxSelect } from "@atlaskit/select"

import EditorInput from "./Editor/Editor"
import Switch from "./Switch/Switch"
import Checkbox from "./Checkbox/Checkbox"
import { CirclePicker } from "react-color"

import { styles, selectStyles } from "./styles"

import { IProps } from "./__types/IProps"

const InputField = ({
	input: { onBlur, ...restInput }, inputType, meta: { error }, classes, ...rest }: IProps) => {
	switch (inputType) {
		case "select":
			const onBlurForSelect = (_: React.ChangeEvent) => {
				onBlur(restInput.value)
			}

			return (
				<CheckboxSelect
					onBlur={onBlurForSelect}
					styles={selectStyles}
					{...restInput}
					{...rest}
					invalidMessage={error}
					className="checkbox-select"
					classNamePrefix="select"
				/>
			)
		case "editor":
			return (
				<div className={classes.editor}>
					<EditorInput {...restInput} {...rest} />
				</div>
			)
		case "textarea":
			return <textarea onBlur={onBlur} {...restInput} {...rest} className={classes.textarea} />
		case "switch":
			return <Switch onBlur={onBlur} {...restInput} {...rest} />
		case "checkbox":
			return <Checkbox onBlur={onBlur} {...restInput} {...rest} />
		case "file":
		const adaptFileEventToValue = (e: React.ChangeEvent<HTMLInputElement>) => {
			e.preventDefault()

			const reader = new FileReader()
			const file = e.target.files[0]

			// tslint:disable-next-line:no-object-mutation
			reader.onloadend = () => {
				restInput.onChange(reader.result)
			}

			if (file) {
				reader.readAsDataURL(file)
			}
		}

		return (
			<input
				onChange={adaptFileEventToValue}
				type="file"
				name={restInput.name}
				{...rest}
			/>
		)
		case "colorpicker":
			// tslint:disable-next-line:jsx-no-lambda TODO: Fix this
			return <CirclePicker onChangeComplete={({ hex }) => restInput.onChange(hex)} />
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

export default injectSheet(styles)(InputField) as InputField<IProps>
