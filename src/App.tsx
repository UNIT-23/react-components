import * as React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "react-jss"
import { PersistGate } from "redux-persist/integration/react"

import MainRoute from "./navigation/routes"

import { persistor, store } from "./appstate/store"

import { Theme } from "./theme"

const onBeforeLift: Function = (): void => {
	// Anything that needs to be done before App ready (by redux-persist)
}

const App: React.SFC = (): JSX.Element => (
	<Provider store={store}>
		<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
			<ThemeProvider theme={Theme}>
				<MainRoute />
			</ThemeProvider>
		</PersistGate>
	</Provider>
)

export default App
