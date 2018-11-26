import { persistCombineReducers } from "redux-persist"
import { reducer as formReducer } from "redux-form"
import storage from "redux-persist/lib/storage"

import { alertReducer as alert } from "./reducers/alert/alertReducer"
import { postsReducer as posts } from "./reducers/posts/postsReducer"

// Setup for Redux Persist
export const rootReducer = persistCombineReducers(
	{
		key: "root",
		storage,
		blacklist: ["alert", "form"]
	},
	{
		form: formReducer,
		alert,
		posts
	}
)
