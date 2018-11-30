import * as React from "react"
import { RouteProps, RouteComponentProps } from "react-router-dom"

export interface IProps extends RouteProps {
	readonly isUnAuth: boolean
	readonly component: React.SFC<RouteComponentProps>
}
