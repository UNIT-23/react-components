import * as React from "react"

import HeaderRow from "./HeaderRow/HeaderRow"

import { IProps } from "./__types/IProps"

function HeaderRows<TData>({ rows, orderBy, orderType, onRequestSort }: IProps<TData>): JSX.Element {
	return (
		<React.Fragment>
			{rows.map((row: ITableHeader<TData>, index: number) => (
				<HeaderRow<TData>
					key={index}
					onRequestSort={onRequestSort}
					orderBy={orderBy}
					orderType={orderType}
					{...row}
				/>
			))}
			{/* For Delete Rows */}
			<HeaderRow />
		</React.Fragment>
	)
}

export default HeaderRows
