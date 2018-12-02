// tslint:disable:no-let
// tslint:disable-next-line:readonly-keyword
export let Colors = {
	primary: "#00796B",
	primaryLight: "#009688",
	secondary: "#FFC107",
	secondaryDark: "#FFA000",
	secondaryLight: "#FFECB3",
	background: "#BDBDBD",
	profileBackground: "#BDBDBD",
	danger: "#d32f2f",
	warning: "#FFEB3B",
	success: "#4CAF50",
	text: "#212121",
	frost: "#757575"
}

export const Theme = (overrideTheme: { readonly [key: string]: string } = {}) => {
	Colors = { ...Colors, ...overrideTheme }
}
