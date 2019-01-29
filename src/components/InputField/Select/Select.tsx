import * as React from "react"
// @ts-ignore
import MuiSelect, { components } from "@atlaskit/select"
import { IProps } from "./__types/IProps"
import { getSelectStyles, dropDownArrowIconsStyles } from "./styles"
import ChevronDownIcon from "../../Icons/ChevronDownIcon"
import ArrowDropUpIcon from "../../Icons/ArrowDropUpIcon"
import ArrowDropDownIcon from "../../Icons/ArrowDropDownIcon"
import { Theme } from "../../../theme"

const getDropdownArrowIndicator = (dropDownIndicatorColor: string = Theme.icons) => (props: IProps) => (
	<components.DropdownIndicator {...props}>
		<div style={dropDownArrowIconsStyles}>
			<ArrowDropUpIcon color={dropDownIndicatorColor} />
			<ArrowDropDownIcon color={dropDownIndicatorColor} />
		</div>
	</components.DropdownIndicator>
)

const DropdownDefaultIndicator = (props: IProps) => (
	<components.DropdownIndicator {...props}>
		<ChevronDownIcon color={Theme.icons} />
	</components.DropdownIndicator>
)

const Select = ({
	onFocus,
	onBlur,
	onChange,
	meta: { error, touched },
	showDropDownArrowIcons,
	selectBackgroundColor,
	dropDownIndicatorColor,
	...rest
}: IProps) => (
	<MuiSelect
		onBlur={onBlur}
		onFocus={onFocus}
		onChange={onChange}
		components={{
			DropdownIndicator: showDropDownArrowIcons
				? getDropdownArrowIndicator(dropDownIndicatorColor)
				: DropdownDefaultIndicator,
			ClearIndicator: components.ClearIndicator
		}}
		styles={getSelectStyles(error, touched, showDropDownArrowIcons, selectBackgroundColor)}
		invalidMessage={error}
		className="checkbox-select"
		classNamePrefix="select"
		{...rest}
	/>
)
export default Select
