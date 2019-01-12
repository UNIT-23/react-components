import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	container: {
		color: "white",
		background: "#445159",
		opacity: "0.9",
		padding: "10px 18px",
		fontSize: 12,
		display: "grid",
		gridTemplateColumns: (props: IProps) => (props.canClose === false ? "1fr" : "1fr auto"),
		gridGap: 10,
		overflow: "hidden",
		height: "auto",
		borderRadius: 3,
		marginTop: (props: IProps) => (props.top ? "0" : "10px"),
		marginBottom: (props: IProps) => (props.top ? "10px" : "0")
	}
}
