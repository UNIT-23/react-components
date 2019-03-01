// tslint:disable-next-line:ban-ts-ignore
// @ts-ignore
import AtlaskitSelect, { components } from "@atlaskit/select"
import * as React from "react"
import { Theme } from "../../theme"
import ArrowDropDownIcon from "../Icons/ArrowDropDownIcon"
import ArrowDropUpIcon from "../Icons/ArrowDropUpIcon"
import ChevronDownIcon from "../Icons/ChevronDownIcon"
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

// tslint:disable-next-line:no-any
const onChangeFormatter = (onChange: (value: any) => void) => (selected: {
	readonly value: IDefaultDataType
	readonly label: string
}) => onChange((selected && selected.value) || { id: 0, name: "" })

function Select<TData extends IDefaultDataType = IDefaultDataType>({
	input: { onFocus, onBlur, onChange },
	meta: { error, touched },
	showDropDownArrowIcons,
	selectBackgroundColor,
	dropDownIndicatorColor,
	options,
	isClearable,
	...rest
}: IProps<TData>) {
	return (
		<AtlaskitSelect
			isClearable={isClearable}
			menuPlacement="auto"
			onBlur={onBlur}
			onFocus={onFocus}
			onChange={onChangeFormatter(onChange)}
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

// tslint:disable:no-any
// tslint:disable-next-line:no-object-mutation
Select.defaultProps = {
	input: {
		onBlur: () => {},
		onChange: () => {},
		onDragStart: () => {},
		onDrop: () => {},
		onFocus: () => {},
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
		visited: false,
	},
}

export default Select
