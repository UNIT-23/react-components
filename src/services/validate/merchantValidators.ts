export function firstname(value: string) {
	if (!value) {
		return "Firstname is required"
	}

	if (value.length < 2) {
		return "Please provide a valid Firstname"
	}

	return ""
}

export function lastname(value: string) {
	if (!value) {
		return "Lastname is required"
	}

	if (value.length < 2) {
		return "Please provide a valid Lastname"
	}

	return ""
}

export function phone(value: string) {
	if (value.length < 6 && value.length > 0) {
		return "Please provide a valid Phone number"
	}

	return ""
}
