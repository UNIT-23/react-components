import { StyledComponentProps } from "react-jss"
import { WrappedFieldMetaProps } from "redux-form"

// tslint:disable:readonly-array
export interface IProps<TData extends IDefaultDataType> extends StyledComponentProps {
	readonly isMulti?: boolean
	readonly isClearable?: boolean
	readonly closeMenuOnSelect?: boolean
	readonly showDropDownArrowIcons?: boolean
	readonly dropDownIndicatorColor?: string
	readonly selectBackgroundColor?: string
	readonly placeholder?: string
	readonly meta?: Partial<WrappedFieldMetaProps>
	readonly input?: {
		onChange?(value: TData): void
		onFocus?(value: TData): void
		onBlur?(value: TData): void
		readonly value: TData
	}
	readonly options?: ReadonlyArray<TData>
}
