import { ColorResult } from "react-color"
import { StyledComponentProps } from "react-jss"
import { BaseFieldProps, WrappedFieldMetaProps } from "redux-form"

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
	readonly label?: string
	readonly input?: IInput<TValue>
	readonly options?: ReadonlyArray<IDefaultDataType>
	readonly meta?: Partial<WrappedFieldMetaProps>
	readonly inputType?: InputTypes
	readonly showDropDownArrowIcons?: boolean
	readonly selectBackgroundColor?: string
	readonly dropDownIndicatorColor?: string
	readonly startDate?: string
	readonly endDate?: string
	readonly children?: React.ReactNode
}

interface IInput<TValue> {
	readonly name?: string
	readonly checked?: boolean
	readonly value?: TValue
	onDragStart?(value: TValue | React.DragEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
	onDrop?(value: TValue | React.DragEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
	onFocus?(value: TValue | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
	onChange?(value: TValue | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | Element> | ColorResult | IStartEndOfWeek): void
	onBlur?(value: TValue | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | Element>): void
}
