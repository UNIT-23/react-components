import { StyledComponentProps } from "react-jss"

export interface IProps<TData> extends Partial<ITableHeader<TData>>, StyledComponentProps {
	readonly onRequestSort?: Function
	readonly orderBy?: keyof TData
	readonly orderType?: "asc" | "desc"
}
