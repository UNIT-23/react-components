import { StyledComponentProps } from "react-jss"
import { DispatchProp } from "react-redux"
import { RouteComponentProps } from "react-router"

export interface IProps extends StyledComponentProps, DispatchProp, RouteComponentProps {}
