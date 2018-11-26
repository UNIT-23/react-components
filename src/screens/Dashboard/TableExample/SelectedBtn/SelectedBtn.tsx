import * as React from "react"

import TrashIcon from "../../../../components/Icons/TrashIcon"

import { Colors } from "../../../../theme"

const SelectedBtn = () => {
	return (
		<div
			style={{
				cursor: "pointer"
			}}
		>
			<TrashIcon color={Colors.danger} fill={Colors.danger} />
		</div>
	)
}

export default SelectedBtn
