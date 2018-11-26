import { DispatchProp } from "react-redux"
import { InjectedFormProps } from "redux-form"

import { IForm } from "./IForm"

export interface IProps extends DispatchProp, InjectedFormProps<IForm, Pick<IProps, "dispatch">> {}
