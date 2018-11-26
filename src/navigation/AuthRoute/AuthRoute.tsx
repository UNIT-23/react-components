import React from "react"
import { Route, Redirect } from "react-router-dom"

import { IProps } from "./__types/IProps"

export default function AuthRoute<T>({ isAuth, component: Component, ...rest }: IProps<T>) {
	return (
		<Route
			render={
				// tslint:disable-next-line:jsx-no-lambda
				({ location }) =>
					isAuth ? (
						<Component />
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location }
							}}
						/>
					)
				// tslint:disable-next-line:jsx-curly-spacing
			}
			{...rest}
		/>
	)
}
