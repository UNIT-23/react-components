// @ts-ignore
import AtlaskitSelect, { components } from "@atlaskit/select"
import * as React from "react"
import { Theme } from "../../../theme"
import ArrowDropDownIcon from "../../Icons/ArrowDropDownIcon"
import ArrowDropUpIcon from "../../Icons/ArrowDropUpIcon"
import ChevronDownIcon from "../../Icons/ChevronDownIcon"
import { dropDownArrowIconsStyles, getSelectStyles } from "./styles"
import { IProps } from "./__types/IProps"

const getDropdownArrowIndicator = (
	dropDownIndicatorColor: string = Theme.icons,
) => (props: IProps<IDefaultDataType>) => (
	<components.DropdownIndicator {...props}>
		<div style={dropDownArrowIconsStyles}>
			<ArrowDropUpIcon color={dropDownIndicatorColor} />
			<ArrowDropDownIcon color={dropDownIndicatorColor} />
		</div>
	</components.DropdownIndicator>
)

const DropdownDefaultIndicator = (props: IProps<IDefaultDataType>) => (
	<components.DropdownIndicator {...props}>
		<ChevronDownIcon color={Theme.icons} />
	</components.DropdownIndicator>
)

function Select<TData extends IDefaultDataType>({
	onFocus,
	onBlur,
	onChange,
	meta: { error, touched },
	showDropDownArrowIcons,
	selectBackgroundColor,
	dropDownIndicatorColor,
	options,
	...rest
}: IProps<TData>) {
	return (
		<AtlaskitSelect
			menuPlacement="auto"
			onBlur={onBlur}
			onFocus={onFocus}
			onChange={onChange}
			components={{
				DropdownIndicator: showDropDownArrowIcons
					? getDropdownArrowIndicator(dropDownIndicatorColor)
					: DropdownDefaultIndicator,
				ClearIndicator: components.ClearIndicator,
			}}
			styles={getSelectStyles(
				error,
				touched,
				showDropDownArrowIcons,
				selectBackgroundColor,
			)}
			invalidMessage={error}
			className="checkbox-select"
			classNamePrefix="select"
			options={options.map<IDropDownData<TData>>((e: TData) => ({
				label: e.name,
				value: e,
			}))}
			{...rest}
		/>
	)
}
export default Select
