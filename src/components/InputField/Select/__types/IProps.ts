import { StyledComponentProps } from "react-jss"
import { WrappedFieldMetaProps } from "redux-form"

// tslint:disable:readonly-array
export interface IProps extends StyledComponentProps {
	readonly showDropDownArrowIcons?: boolean
	readonly dropDownIndicatorColor?: string
	readonly selectBackgroundColor?: string
	readonly meta?: Partial<WrappedFieldMetaProps>
	readonly onBlur: (event: React.FocusEvent) => void
	readonly onChange: (event: React.ChangeEvent) => void
	readonly onFocus: (event: React.FocusEvent) => void
}
