import { Theme } from "../../../theme"

import { IProps } from "../__types/IProps"
import { Values } from "../__types/Values"

// tslint:disable-next-line:no-any
export const styles: any = () => ({
	button: {
		color: Theme.primary,
		background: ({ color, disabled }: IProps) => (disabled ? Theme.primaryLight || color : Theme.secondary),
		padding: ({ padding }: IProps) => padding || Values.defaultPadding,
		width: ({ width, buttonType }: IProps) => (buttonType === "square" ? 50 : width || Values.defaultWidth),
		outline: "none",
		border: "3px",
		margin: ({ margin }: IProps) => margin || "13px 20px 21px 12px",
		cursor: "pointer",
		boxShadow: "1px 3px 8px 0px #ccc",
		radius: "3px",
		position: "absolute",
		height: "41px",
		font: "normal bold 14px/19px Roboto"
	},
	addBtn: {
		background: ({ color, disabled }: IProps) => (disabled ? "#ccc" : color || Theme.primaryLight),
		width: 97,
		height: 41,
		borderRadius: "50%",
		display: "flex",
		boxShadow: "1px 3px 8px 0px #ccc",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		font: "16px"
	}
})
