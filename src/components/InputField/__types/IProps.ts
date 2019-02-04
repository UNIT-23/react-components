import { StyledComponentProps } from "react-jss"
import { BaseFieldProps, WrappedFieldMetaProps } from "redux-form"
import { ColorResult } from "react-color"

// tslint:disable:readonly-array

export interface IProps<TValue = string | string[] | number | boolean | ArrayBuffer | IStartEndOfWeek>
	extends StyledComponentProps,
		Partial<BaseFieldProps<IProps<TValue>>> {
	readonly checked?: boolean
	readonly closeMenuOnSelect?: boolean
	readonly enableBackDates?: boolean
	readonly isMulti?: boolean
	readonly name?: string
	readonly placeholder?: string
	readonly input?: IInput<TValue>
	readonly options?: ReadonlyArray<IDropDownData<TValue>>
	readonly meta?: Partial<WrappedFieldMetaProps>
	readonly inputType?: InputTypes
	readonly showDropDownArrowIcons?: boolean
	readonly selectBackgroundColor?: string
	readonly dropDownIndicatorColor?: string
}

interface IInput<TValue> {
	readonly name?: string
	readonly checked?: boolean
	readonly value?: TValue
	onDragStart?(value: TValue | React.DragEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
	onDrop?(value: TValue | React.DragEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
	onFocus?(value: TValue | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
	onChange?(value: TValue | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | Element> | ColorResult): void
	onBlur?(value: TValue | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
}
