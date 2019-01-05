import * as React from "react"

import HeaderRow from "./HeaderRow/HeaderRow"

import { IProps } from "./__types/IProps"

function HeaderRows({ rows, orderBy, orderType, onRequestSort }: IProps): JSX.Element {
	return (
		<React.Fragment>
			{rows.map((row: ITableHeader, index: number) => (
				<HeaderRow key={index} onRequestSort={onRequestSort} orderBy={orderBy} orderType={orderType} {...row} />
			))}
		</React.Fragment>
	)
}

export default HeaderRows
