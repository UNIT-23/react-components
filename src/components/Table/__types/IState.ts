export interface IState {
	readonly orderType: "asc" | "desc"
	readonly orderBy: string
	readonly page: number
	readonly rowsPerPage: number
}
