import * as React from "react"
import TablePagination from "@material-ui/core/TablePagination"

import { IProps } from "./__types/IProps"

function Pagination ({ count, rowsPerPage, currentPage, onChangePage, onChangeRowsPerPage }: IProps): JSX.Element {
	return (
		<TablePagination
			component="div"
			count={count}
			rowsPerPage={rowsPerPage}
			page={currentPage}
			onChangePage={onChangePage}
			onChangeRowsPerPage={onChangeRowsPerPage}
		/>
	)
}

export default Pagination
