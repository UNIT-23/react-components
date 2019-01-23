import { TablesTypes } from "../types/tablesTypes"

import { TablesActions, SetTableSearchFilterAction, SetRowsPerPageAction } from "../actions/__types/IActions"

export const initialState: ITables = {
	filter: "",
	rowsPerPage: 10
}

export function tablesReducer(state = initialState, action: TablesActions): ITables {
	switch (action.type) {
		case TablesTypes.SET_TABLE_SEARCH_FILTER:
			return { ...state, filter: (action as SetTableSearchFilterAction).payload }
		case TablesTypes.SET_ROWS_PER_PAGE:
			return { ...state, rowsPerPage: (action as SetRowsPerPageAction).payload }
		default:
			return state
	}
}
