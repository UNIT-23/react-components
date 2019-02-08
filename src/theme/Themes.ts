import { Theme as MaterialThemeType } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"

// tslint:disable-next-line:no-let
export let Theme: IThemeColors = {
	primary: "#FFFFFF",
	primaryLight: "#FFFFFF",
	primaryDark: "#F4F5F8",
	secondary: "#85C733",
	secondaryLight: "rgba(133, 199, 51, 0.12)",
	secondaryDark: "#3D974F",
	background: "#f9f9f9",
	profileBackground: "#F9F9F9",
	accent: "#FBC01B",
	accentLight: "#fff8ed",
	accentDark: "#f2b900",
	danger: "#FE2B0E",
	gray: "#2222",
	info: "#252631",
	warning: "#FBC01B",
	success: "#6DD230",
	icons: "#778CA2"
}

export const MuiTheme: MaterialThemeType = createMuiTheme({
	palette: {
		background: {
			default: Theme.background
		},
		primary: {
			main: Theme.primary,
			light: Theme.primaryLight
		},
		secondary: {
			main: Theme.secondary
		},
		text: {
			primary: Theme.info
		},
		grey: {
			"100": Theme.gray
		}
	}
})

// tslint:disable-next-line:no-let
export let DarkTheme: IThemeColors = {
	primary: "#FFFFFF",
	primaryLight: "#FFFFFF",
	primaryDark: "#F4F5F8",
	secondary: "#85C733",
	secondaryLight: "rgba(133, 199, 51, 0.12)",
	secondaryDark: "#3D974F",
	background: "#888",
	profileBackground: "#F9F9F9",
	accent: "#FBC01B",
	accentLight: "#fff8ed",
	accentDark: "#f2b900",
	danger: "#FE2B0E",
	gray: "#2222",
	info: "#252631",
	warning: "#FBC01B",
	success: "#6DD230",
	icons: "#778CA2"
}

export function overrideTheme(newTheme: IThemeColors, newDarkTheme: IThemeColors): void {
	Theme = { ...Theme, ...newTheme }
	DarkTheme = { ...DarkTheme, ...newDarkTheme }
}
