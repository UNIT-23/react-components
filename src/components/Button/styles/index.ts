import { IProps } from "../__types/IProps"
import { Values } from "../__types/Values"

// tslint:disable-next-line:no-any
export const styles: any = (theme: IThemeColors) => ({
	button: {
		color: ({ outline }: IProps) => (outline ? theme.info : theme.primary),
		background: ({ disabled, outline }: IProps) =>
			disabled
				? theme.primaryLight
				: outline
				? theme.primary
				: theme.secondary,
		padding: ({ padding }: IProps) => padding || "0px",
		width: ({ width, buttonType }: IProps) =>
			buttonType === "square" ? 50 : width || Values.defaultWidth,
		outline: "none",
		borderRadius: ({ borderRadius }: IProps) => borderRadius || "4px",
		margin: ({ margin }: IProps) => margin || "13px 20px 21px 12px",
		cursor: "pointer",
		height: "41px",
		font: "normal bold 14px/19px Roboto",
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		borderColor: theme.secondary,
	},
	addBtn: {
		background: ({ color, disabled }: IProps) =>
			disabled ? "#ccc" : color || theme.secondary,
		width: "97px",
		height: "41px",
		display: "flex",
		boxShadow: "1px 3px 8px 0px #ccc",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		font: "normal bold 14px/19px Roboto",
		margin: "13px 20px",
		borderRadius: "3px",
	},
	span: {
		font: "normal bold 14px/19px Roboto",
		color: theme.primary,
		padding: "12px 16px 10px 7px",
		alignItems: "center",
	},
	icon: {
		margin: "12px 0px 10px 16px",
	},
	outline: {
		border: ({ borderColor }: IProps) =>
			borderColor ? `1px solid ${borderColor}` : " 1px solid #E8ECEF",
		background: ({ background }: IProps) =>
			background ? background : theme.primary,
		borderRadius: "3px",
		position: "inherit",
		cursor: "pointer",
		width: "40px",
		height: "40px",
		margin: ({ margin }: IProps) => (margin ? margin : "5px"),
		font: "normal normal 14px/19px Roboto",
		padding: ({ padding }: IProps) =>
			padding ? padding : "12px 15px 9px 16px",
		color: ({ color }: IProps) => (color ? color : "#7C8081"),
	},
	danger: {
		width: "96px",
		height: "30px",
		font: "normal 500 14px/normal Roboto",
		textAlign: "center",
		letterSpacing: "0.3px",
		textTransform: "uppercase",
		borderColor: theme.primary,
		backgroundColor: ({ outline }: IProps) =>
			outline ? theme.primary : "red",
		color: ({ outline }: IProps) => (outline ? "red" : theme.primary),
		margin: ({ margin }: IProps) => (margin ? margin : "7px"),
		outline: "none",
	},
})
