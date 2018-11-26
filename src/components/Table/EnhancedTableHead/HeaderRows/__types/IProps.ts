import { IHead } from "../../../__types/IHead"

export interface IProps {
	readonly onRequestSort: Function
	// Should be keyof TRow but compiler err/limitation aren't allowing it https://stackoverflow.com/a/49469522/3104969
	readonly orderBy: string
	readonly orderType?: "asc" | "desc"
	readonly rows: ReadonlyArray<IHead>
}
