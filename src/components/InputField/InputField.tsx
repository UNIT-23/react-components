import React from "react"
import injectSheet from "react-jss"
// @ts-ignore
import { CheckboxSelect } from "@atlaskit/select"

import EditorInput from "./Editor/Editor"
import Switch from "./Switch/Switch"
import Checkbox from "./Checkbox/Checkbox"
import Calender from "./Calender/CalenderComponent"
import { CirclePicker } from "react-color"
// @ts-ignore
import TimeKeeper from "react-timekeeper"

import { styles, selectStyles } from "./styles"

import { IProps } from "./__types/IProps"
import { InputTypes } from "../../models/InputTypes"

const InputField = ({ input: { onBlur, ...restInput }, inputType, meta: { error }, classes, ...rest }: IProps) => {
	switch (inputType) {
		case InputTypes.Select:
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
		case InputTypes.Editor:
			return (
				<div className={classes.editor}>
					<EditorInput {...restInput} {...rest} />
				</div>
			)
		case InputTypes.Textarea:
			return <textarea onBlur={onBlur} {...restInput} {...rest} className={classes.textarea} />
		case InputTypes.Switch:
			return <Switch onBlur={onBlur} {...restInput} {...rest} />
		case InputTypes.Checkbox:
			return (
				<Checkbox
					onBlur={onBlur}
					onChange={restInput.onChange}
					value={restInput.name}
					checked={restInput.value}
					{...rest}
				/>
			)
		case InputTypes.File:
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

			return <input onChange={adaptFileEventToValue} type="file" name={restInput.name} {...rest} />
		case InputTypes.Calender:
			return (
				<Calender
					startDate={restInput.value.startDate}
					endDate={restInput.value.endDate}
					date={restInput.value}
					onDateChange={restInput.onChange}
					onDatesChange={restInput.onChange}
					{...rest}
				/>
			)
		case InputTypes.TimePicker:
			return <TimeKeeper time={restInput.value} />
		// Return <TimeKeeper time={restInput.value} onChange={value => restInput.value.onChange(value.formatted24)} />

		case InputTypes.Colorpicker:
			// tslint:disable-next-line:jsx-no-lambda TOD O: Fix this
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
