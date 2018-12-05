import { Colors } from "../../../theme"

import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	button: {
		color: "black",
		background: ({ color, disabled }: IProps) => (disabled ? "#ccc" : color || Colors.primaryLight),
		padding: ({ padding }: IProps) => padding || 10,
		width: ({ width }: IProps) => width || 215,
		outline: "none",
		border: "none",
		margin: ({ margin }: IProps) => margin || "10px 0px",
		cursor: "pointer",
		boxShadow: "1px 3px 8px 0px #ccc"
	}
}
