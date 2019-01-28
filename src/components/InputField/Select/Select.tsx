import * as React from "react"
// @ts-ignore
import MuiSelect, { components } from "@atlaskit/select"
import { IProps } from "./__types/IProps"
import { getSelectStyles } from "./styles"
import ChevronDownIcon from "../../Icons/ChevronDownIcon"
import { Theme } from "../../../theme"

const DropdownIndicator = (props: IProps) =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props}>
			<ChevronDownIcon color={Theme.icons} />
		</components.DropdownIndicator>
	)

const Select = ({ onFocus, onBlur, onChange, meta: { error, touched }, ...rest }: IProps) => (
	<MuiSelect
		onBlur={onBlur}
		onFocus={onFocus}
		onChange={onChange}
		components={{
			DropdownIndicator,
			ClearIndicator: components.ClearIndicator
		}}
		styles={getSelectStyles(error, touched)}
		invalidMessage={error}
		className="checkbox-select"
		classNamePrefix="select"
		{...rest}
	/>
)
export default Select
