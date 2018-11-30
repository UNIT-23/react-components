import * as React from "react"
import { Route } from "react-router-dom"

import RedirectToLogin from "../../components/RedirectToLogin/RedirectToLogin"

import { IProps } from "./__types/IProps"

const PublicRoute = ({ isUnAuth, component: Component, ...rest }: IProps) => (
	<Route render={isUnAuth ? Component : RedirectToLogin} {...rest} />
)

export default PublicRoute
