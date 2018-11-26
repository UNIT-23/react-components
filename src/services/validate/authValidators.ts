export function username(value: string) {
	if (!value) {
		return "Username is required"
	}

	return ""
}

export function password(value: string) {
	if (!value) {
		return "Password is required"
	}

	return ""
}

export function email(value: string) {
	if (!value) {
		return "Email is required"
	}

	// Ref: https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
	// tslint:disable-next-line:max-line-length
	const regxEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!regxEmail.test(value)) {
		return "Please enter a valid email"
	}

	return ""
}

export function forgotemail(value: string) {
	if (!value) {
		return "Password is required"
	}

	if (value.length < 4) {
		return "Please enter minimum 4 character long password"
	}

	return ""
}
