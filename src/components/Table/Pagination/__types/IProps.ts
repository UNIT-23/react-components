import { TablePaginationProps } from "@material-ui/core/TablePagination"

export interface IProps extends Omit<TablePaginationProps, "onChangeRowsPerPage"> {
	onChangeRowsPerPage(selected: IDropDownData<number>): void
}
