import * as React from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"

const RedirectToLogin = ({ location }: RouteComponentProps) => (
	<Redirect
		to={{
			pathname: "/login",
			state   : { from: location }
		}}
	/>
)

export default RedirectToLogin
