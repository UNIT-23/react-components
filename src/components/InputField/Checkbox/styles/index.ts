import { Theme } from "../../../../theme"

export const styles = {
	root: {
		color: "red"
	},
	checked: {
		BorderRadius: 13,
		Width: 42,
		Height: 26,
		MarginTop: -13,
		MarginLeft: -21,
		Border: "solid 1px",
		BorderColor: Theme.secondary,
		BackgroundColor: Theme.secondary,
		Opacity: 1
	}
}

// Const selectStyles = {
// 	Control: (base: Object) => ({
// 		...base,
// 		Outline: 0,
// 		BackgroundColor: "#fff",
// 		BorderColor: "#fff",
// 		Color: "#000",
// 		MinHeight: 40,
// 		BorderRadius: 0,
// 		BoxShadow: "1px 3px 8px 0px #\cc",
// 		BorderStyle: "none",
// 		BorderWidth: 0,
// 		"&:hover": {
// 			BorderColor: "#fff"
// 		},
// 		"&:focus": {
// 			BorderColor: "#fff"
// 		}
// 	}),
// 	Root: (base: Object) => ({
// 		...base,
// 		Outline: 0,
// 		BackgroundColor: "#fff",
// 		"&:hover": {
// 			BackgroundColor: "#fff"
// 		}
// 	})
// }

// Export { selectStyles }
