import { email, username, forgotemail, password } from "./authValidators"
import { newMessage, message, subject } from "./chatValidators"
import { lastname, firstname, phone } from "./merchantValidators"

import { IFormValues } from "./__types/IFromValues"

const validators: { readonly [key: string]: (value: string) => string } = {
	email,
	forgotemail,
	message,
	name,
	newMessage,
	password,
	subject,
	username,
	lastname,
	firstname,
	phone
}

export function validate(values: IFormValues) {
	// tslint:disable-next-line:readonly-keyword
	const errors: { [key: string]: string } = {}

	Object.keys(values).forEach((key: string) => {
		// tslint:disable-next-line:no-object-mutation
		validators[key] && (errors[key] = validators[key](values[key] as string))
	})

	return errors
}
