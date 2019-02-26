import { DispatchProp } from "react-redux"

export interface IProps extends DispatchProp {
	readonly orderBy?: string
	readonly orderType?: "asc" | "desc"
	readonly page?: number
	readonly rowsPerPage?: number
}
