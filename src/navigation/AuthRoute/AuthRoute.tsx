import React from "react"
import { Route } from "react-router-dom"

import RedirectToLogin from "../../components/RedirectToLogin/RedirectToLogin"

import { IProps } from "./__types/IProps"

function AuthRoute({ isAuth, component: Component, ...rest }: IProps) {
	return <Route render={isAuth ? Component : RedirectToLogin} {...rest} />
}

export default AuthRoute
