import * as React from "react"
import { RouteProps } from "react-router-dom"

export interface IProps<T> extends RouteProps {
	readonly isUnAuth: boolean
	readonly component: React.SFC | React.SFC<T>
}
