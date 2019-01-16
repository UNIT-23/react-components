import * as React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme()

function materialThemeWrapper<TProps>(StyledComponent: React.ComponentType<TProps>) {
	return (props: TProps) => (
		<MuiThemeProvider theme={theme}>
			<StyledComponent {...props} />
		</MuiThemeProvider>
	)
}

export default materialThemeWrapper
