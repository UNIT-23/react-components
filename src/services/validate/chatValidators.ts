export function newMessage(value: string) {
	const formattedValue = value.replace(/<(?:.|\n)*?>/gm, "").trim()
	if (!formattedValue) {
		return "Message is required"
	}

	return ""
}

export function message(value: string) {
	if (!value) {
		return "Message is required"
	}

	return ""
}

export function subject(value: string) {
	if (!value) {
		return "Subject is required"
	}

	return ""
}
