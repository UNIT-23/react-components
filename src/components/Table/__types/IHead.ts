export interface IHead {
	readonly disablePadding: boolean
	readonly id: string
	readonly label: string
	readonly align: "left" | "center" | "right" | "justify" | "char"
}
