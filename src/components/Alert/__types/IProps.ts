import { DispatchProp } from "react-redux"
import { StyledComponentProps } from "react-jss"

export interface IProps extends DispatchProp, StyledComponentProps, Partial<IAlert> {}
