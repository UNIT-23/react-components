import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	container: {
		position: "absolute",
		zIndex: 1000,
		width: "0 auto",
		top: (props: IProps) => (props.top ? "30px" : "unset"),
		bottom: (props: IProps) => (props.top ? "unset" : "30px"),
		margin: "0 auto",
		left: 30,
		right: 30,
		display: "flex",
		flexDirection: (props: IProps) => (props.top ? "column-reverse" : "column"),
		pointerEvents: "none",
		alignItems: (props: IProps) => (props.position === "center" ? "center" : `flex-${props.position || "end"}`),
		"@media(max-width: 680px)": {
			alignItems: "center"
		}
	}
}
