import { IForm as IInputsForm } from "../../../screens/Dashboard/Inputs/__types/IForm"

export interface IFormValues extends IInputsForm {
	readonly [key: string]: string | boolean
}
