import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	container: {
		position: "absolute",
		bottom: (props: IProps) => (props.top ? "10px" : "0"),
		left: 0,
		width: "auto",
		backgroundImage: "linear-gradient(130deg, #00b4e6, #00f0e0)",
		height: 5
	}
}
