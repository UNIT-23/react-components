// tslint:disable-next-line:no-any
export const styles: any = {
	main: {
		position: "relative",
		width: "100%",
		height: "100%",
		overflow: "hidden",
		cursor: "pointer",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#bfbfbf"
	},
	message: {
		boxSizing: "border-box",
		position: "relative",
		overflow: "hidden",
		width: "30ch",
		"@media(max-width: 680px)": {
			width: "100%"
		}
	},
	button: {
		cursor: "pointer",
		pointerEvents: "all",
		outline: 0,
		border: "none",
		background: "transparent",
		display: "flex",
		alignSelf: "flex-end",
		overflow: "hidden",
		margin: 0,
		padding: 0,
		paddingBottom: 14,
		color: "rgba(255, 255, 255, 0.5)",
		"& :hover": {
			color: " rgba(255, 255, 255, 0.6)"
		}
	}
}
