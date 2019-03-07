// tslint:disable:no-any
// Import FilePond styles
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import "filepond/dist/filepond.min.css"
import React from "react"
// @ts-ignore
import { FilePond } from "react-filepond"
import injectSheet from "react-jss"
import { InputTypes } from "../../models/InputTypes"
import materialThemeWrapper from "../MaterialThemeWrapper/MaterialThemeWrapper"
import Calender from "./Calender/CalenderComponent"
import Checkbox from "./Checkbox/Checkbox"
import ColorPicker from "./ColorPicker/ColorPicker"
import EditorInput from "./Editor/Editor"
import { styles } from "./styles"
import Switch from "./Switch/Switch"
// @ts-ignore
import TimeKeeper from "./TimeKeeper/TimeKeeperComponent"
import { IProps } from "./__types/IProps"

function InputField<TValue> ({ input, inputType, label, classes, children, ...rest }: IProps<TValue>) {
	const { name, onBlur = () => {}, onChange, onFocus, value } = input

	switch (inputType) {
	case InputTypes.Editor:
		return (
			<div className={classes.editor}>
				<EditorInput {...input} {...rest} />
			</div>
		)
	case InputTypes.Textarea:
		return <textarea value={value as any} onBlur={onBlur} onFocus={onFocus} onChange={onChange} className={classes.textarea} {...rest} />
	case InputTypes.Switch:
		return <Switch {...input} {...rest} />
	case InputTypes.Checkbox:
		return <Checkbox onBlur={onBlur} onChange={onChange} value={name} checked={value as any} {...rest} />
	case InputTypes.Radio:
		return <FormControlLabel value={value as any} control={<Radio />} label={label} name={name} />
	case InputTypes.RadioGroup:
		return (
			<FormControl>
				<RadioGroup {...input as any} {...rest}>
					{React.Children.map(children, (comp: any) => (
						<FormControlLabel value={comp.props.input.value} control={<Radio />} label={comp.props.label} />
					))}
				</RadioGroup>
			</FormControl>
		)
	case InputTypes.File:
		return <FilePond onupdatefiles={onChange as any} {...rest} />

	case InputTypes.Calender:
		return (
			<Calender
				startDate={(value as any).startDate}
				endDate={(value as any).endDate}
				date={value as any}
				onDateChange={onChange as any}
				onDatesChange={onChange as any}
				{...rest}
			/>
		)
	case InputTypes.TimePicker:
		return <TimeKeeper value={value as any} onChange={onChange as any} />
	case InputTypes.ColorPicker:
		return <ColorPicker color={value as any} onChange={onChange} />
	default:
		return <input onBlur={onBlur} onFocus={onFocus} onChange={onChange} value={value as any} className={classes.input} {...rest} />
	}
}

// tslint:disable:no-any
// tslint:disable-next-line:no-object-mutation
InputField.defaultProps = {
	input: {
		onBlur     : () => {},
		onChange   : () => {},
		onDragStart: () => {},
		onDrop     : () => {},
		onFocus    : () => {}
	},
	meta: {
		autofilled     : false,
		asyncValidating: false,
		dirty          : false,
		// tslint:disable-next-line:no-any
		dispatch       : (action: any) => action,
		form           : "",
		initial        : "",
		invalid        : false,
		pristine       : true,
		submitting     : false,
		submitFailed   : false,
		touched        : false,
		valid          : true,
		visited        : false
	}
}

export default React.forwardRef(materialThemeWrapper(injectSheet(styles)(InputField)))
