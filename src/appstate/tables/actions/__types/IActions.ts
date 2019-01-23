import { TablesTypes } from "../../types/tablesTypes"

export type SetRowsPerPageAction = IAction<number, TablesTypes>

export type SetTableSearchFilterAction = IAction<string, TablesTypes>

export type TablesActions = SetRowsPerPageAction | SetTableSearchFilterAction
