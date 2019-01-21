import * as React from "react"
import injectSheet from "react-jss"

import TrashIcon from "../../../../components/Icons/TrashIcon"

import { IProps } from "./__types/IProps"

const SelectedBtn = ({ theme }: IProps) => (
	<div
		style={{
			cursor: "pointer"
		}}
	>
		<TrashIcon color={theme.danger} fill={theme.danger} />
	</div>
)

export default injectSheet({})(SelectedBtn)
