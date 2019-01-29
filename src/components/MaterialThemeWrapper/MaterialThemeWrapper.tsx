import * as React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"

import { MuiTheme } from "../../theme/"

function materialThemeWrapper<TProps>(StyledComponent: React.ComponentType<TProps>) {
	return (props: TProps) => (
		<MuiThemeProvider theme={MuiTheme}>
			<StyledComponent {...props} />
		</MuiThemeProvider>
	)
}

export default materialThemeWrapper
