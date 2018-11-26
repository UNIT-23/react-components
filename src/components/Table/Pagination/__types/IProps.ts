export interface IProps {
	readonly component: string
	readonly count: number
	readonly currentPage: number
	readonly onChangePage: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void
	readonly onChangeRowsPerPage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
	readonly rowsPerPage: number
}
