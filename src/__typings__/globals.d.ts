interface IRootState {
	readonly auth: IAuth
	readonly alert: IAlert
}

interface ITableData {
	readonly component: React.ReactNode
	readonly value: number | string
}

interface IAuth {
	readonly user: IUser
	readonly authToken: string
	readonly loginRequestState: API
	readonly loginError: string
}

interface IUser {
	readonly id: string
	readonly name: string
}

interface ITableHeader {
	readonly id: string
	readonly numeric: boolean
	readonly disablePadding: boolean
	readonly label: string
}

interface IAlert {
	readonly alertState: boolean
	readonly message?: string
	readonly alertLevel?: AlertLevel
}

declare enum AlertLevel {
	Success = "Success",
	Warning = "Warning",
	Error = "Error"
}

declare enum IWeekDays {
	Monday = "Monday",
	Sunday = "Sunday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday"
}

declare enum InputTypes {
	Select = "select",
	Textarea = "textarea",
	Switch = "switch",
	Checkbox = "checkbox"
}

/* ------------------------------------------------- */
// Actions Types
/* ------------------------------------------------- */
interface IAction<P, T> {
	readonly payload?: P
	readonly type: T
}

/* ------------------------------------------------- */
// API dup cause can't import in global.d.ts
/* ------------------------------------------------- */
declare enum API {
	NOT_REQUESTED = "API_NOT_REQUESTED",
	REQUEST_PENDING = "API_REQUEST_PENDING",
	REQUEST_SUCCESS = "API_REQUEST_SUCCESS",
	REQUEST_ERROR = "API_REQUEST_ERROR"
}
