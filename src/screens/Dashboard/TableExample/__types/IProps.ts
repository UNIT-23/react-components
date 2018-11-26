import { DispatchProp } from "react-redux"

export interface IProps extends DispatchProp, Partial<IPosts> {}
