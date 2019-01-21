import * as React from "react"
import { Redirect, Route } from "react-router-dom"

import { IProps } from "./__types/IProps"

function AuthorizeRoute ({ isAuth, component: Component, path }: IProps) {
	// FIXME: https://github.com/ReactTraining/react-router/issues/6420#issuecomment-433541079
	// Waiting for Fix from library
	function component () {
		return <Component />
	}

	if (isAuth && path !== "/login") {
		return <Route exact path={path} render={component} />
	}

	if (isAuth && path === "/login") {
		return (
			<Redirect
				to={{
					pathname: "/",
					state   : { from: path }
				}}
			/>
		)
	}

	if (!isAuth && path !== "/login") {
		return (
			<Redirect
				to={{
					pathname: "/login",
					state   : { from: path }
				}}
			/>
		)
	}

	return <Route exact path={path} render={component} />
}

export default AuthorizeRoute
