export interface IState {
	selected: ReadonlyArray<IPost>
	selectedIds: ReadonlyArray<number>
	currentPage: number
	searchValue: string
}
