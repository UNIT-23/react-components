interface IRootState {
	readonly alert: IAlert
	readonly posts: IPosts
	readonly tables: ITables
}

interface IPosts {
	readonly page: number
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
	readonly posts: ReadonlyArray<IPost>
	readonly postsGetRequestState: API
	readonly postsCount: number
	readonly postsGetError: string
	readonly rowsPerPage: number
}

interface IPost {
	readonly id: string
	readonly firstname: string
	readonly lastname: string
	readonly email: string
	readonly phone: string
	readonly hasPremium: boolean
}

interface ITables {
	readonly rowsPerPage: number
	readonly filter: string
}

interface ITableData {
	readonly [key: string]: {
		readonly component: React.ReactNode
		readonly value: number | string
	}
}

interface ITableHeader {
	readonly id: string
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
	Editor = "editor",
	Checkbox = "checkbox",
	File = "file",
	Calender = "calender",
	TimePicker = "timepicker",
	ColorPicker = "colorpicker"
}

interface IStartEndOfWeek {
	readonly startDate: string
	readonly endDate: string
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

/* ------------------------------------------------- */
// Useful Types
/* ------------------------------------------------- */
interface IListPayload {
	readonly limit?: number
	readonly offset?: number
	readonly sort?: string
	readonly orderBy?: string
	readonly orderType?: "asc" | "desc"
}

interface ITableData {
	readonly [key: string]: {
		readonly component: React.ReactNode
		readonly value: number | string
	}
}

interface IDropDownData<T = number | string> {
	readonly label: string
	readonly value: T
}

enum SuperPrivileges {
	None = "none",
	Read = "read",
	Write = "write"
}

// tslint:disable-next-line:max-file-line-count
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
