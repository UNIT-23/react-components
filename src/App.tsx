import * as React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import MainRoute from "./navigation/routes"

import { persistor, store } from "./appstate/store"

const onBeforeLift: Function = (): void => {
	// Anything that needs to be done before App ready (by redux-persist)
}

const App: React.SFC = (): JSX.Element => (
	<Provider store={store}>
		<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
			<MainRoute />
		</PersistGate>
	</Provider>
)

export default App
