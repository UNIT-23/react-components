import { TablesTypes } from "../types/tablesTypes"
import { SetRowsPerPageAction, SetTableSearchFilterAction } from "./__types/IActions"

export function setRowsPerPage (payload: number): SetRowsPerPageAction {
	return {
		type: TablesTypes.SET_ROWS_PER_PAGE,
		payload
	}
}

export function setTableSearchFilter (payload: string): SetTableSearchFilterAction {
	return {
		type: TablesTypes.SET_TABLE_SEARCH_FILTER,
		payload
	}
}
