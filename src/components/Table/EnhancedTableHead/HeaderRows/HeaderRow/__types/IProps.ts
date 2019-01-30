import { StyledComponentProps } from "@material-ui/core"

export interface IProps<TData> extends ITableHeader<TData>, StyledComponentProps {
	readonly onRequestSort: Function
	readonly orderBy: keyof TData
	readonly orderType: "asc" | "desc"
}
