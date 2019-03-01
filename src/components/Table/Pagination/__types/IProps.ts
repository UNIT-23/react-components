import { TablePaginationProps } from "@material-ui/core/TablePagination"
import { StyledComponentProps } from "react-jss"

export interface IProps
	extends Omit<TablePaginationProps, "onChangeRowsPerPage" | "classes">,
		StyledComponentProps {
	onChangeRowsPerPage(selected: IDefaultDataType): void
}
