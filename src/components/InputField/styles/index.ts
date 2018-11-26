import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	input: {
		width: "96%",
		fontSize: 14,
		outline: "none",
		borderRadius: "0px",
		margin: "8px 0px",
		height: 31,
		padding: "8px 8px",
		border: ({ meta: { error, touched } }: IProps) => (error && touched ? "1px solid red" : "1px solid #e8e6e6")
	},
	textarea: {
		width: "96%",
		fontSize: 14,
		outline: "none",
		borderRadius: "0px",
		margin: "8px 0px",
		resize: "none",
		height: 80,
		padding: "8px 8px",
		border: ({ meta: { error, touched } }: IProps) => (error && touched ? "1px solid red" : "1px solid #e8e6e6")
	}
}

const selectStyles = {
	control: (base: Object) => ({
		...base,
		outline: 0,
		backgroundColor: "#fff",
		borderColor: "#fff",
		color: "#000",
		minHeight: 40,
		borderRadius: 0,
		boxShadow: "1px 3px 8px 0px #ccc",
		borderStyle: "none",
		borderWidth: 0,
		"&:hover": {
			borderColor: "#fff"
		},
		"&:focus": {
			borderColor: "#fff"
		}
	}),
	options: (base: Object) => ({
		...base,
		outline: 0,
		backgroundColor: "#fff",
		"&:hover": {
			backgroundColor: "#fff"
		}
	}),
	menu: (base: Object) => ({
		...base,
		marginTop: 1,
		borderRadius: 0,
		"&:hover": {
			"&:focus": {
				backgroundColor: "#ccc"
			}
		}
	}),
	menuList: (base: Object) => ({
		...base,
		"&:hover": {
			"&:focus": {
				backgroundColor: "#ccc"
			}
		}
	}),
	multiValueRemove: (base: Object) => ({
		...base,
		"&:hover": {
			backgroundColor: "#f8f8f8;"
		}
	})
}

export { selectStyles }
