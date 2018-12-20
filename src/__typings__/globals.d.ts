interface IRootState {
	readonly alert: IAlert
	readonly posts: IPosts
}

interface IPosts {
	readonly posts: ReadonlyArray<IPost>
	readonly postsGetRequestState: API
	readonly postsCount: number
	readonly postsGetError: string
}

interface IPost {
	readonly postId: number
	readonly id: number
	readonly name: string
	readonly email: string
	readonly body: string
}

interface ITableData {
	readonly [key: string]: {
		readonly component: React.ReactNode
		readonly value: number | string
	}
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

enum AlertLevel {
	Success = "Success",
	Warning = "Warning",
	Error = "Error"
}

enum IWeekDays {
	Monday = "Monday",
	Sunday = "Sunday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday"
}

enum InputTypes {
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
enum API {
	NOT_REQUESTED = "API_NOT_REQUESTED",
	REQUEST_PENDING = "API_REQUEST_PENDING",
	REQUEST_SUCCESS = "API_REQUEST_SUCCESS",
	REQUEST_ERROR = "API_REQUEST_ERROR"
}
