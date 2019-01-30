// tslint:disable:no-implicit-dependencies

import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistStore } from "redux-persist"

// @ts-ignore
import Reactotron from "reactotron-react-js"
// @ts-ignore
import { reactotronRedux } from "reactotron-redux"

// import sagaPlugin from "reactotron-redux-saga"

import { rootReducer } from "./rootReducer"

import { rootSaga } from "./rootSaga"

function configureStore() {
	// To use Reactotron for devTools
	// Source: https://github.com/infinitered/reactotron
	if (process.env.NODE_ENV !== "production") {
		const reactotron = Reactotron.configure()
			// TODO: Activate sagaPlugin https://github.com/infinitered/reactotron/issues/917#issue-403886155
			// .use(sagaPlugin({}))
			.use(reactotronRedux())
			.connect()

		// const sagaMonitor = reactotron.createSagaMonitor()

		const sagaMiddleware_DEV = createSagaMiddleware({})

		// Imported as on Docs
		const immutabilityCheckMiddleware = require("redux-immutable-state-invariant").default()

		const store_DEV = reactotron.createStore(
			rootReducer,
			compose(applyMiddleware(sagaMiddleware_DEV, immutabilityCheckMiddleware))
		)

		sagaMiddleware_DEV.run(rootSaga)

		return {
			store: store_DEV,
			persistor: persistStore(store_DEV)
		}
	}

	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))

	// Must initiate sagas after creating the store
	sagaMiddleware.run(rootSaga)

	return {
		store,
		persistor: persistStore(store)
	}
}

export const { store, persistor } = configureStore()
