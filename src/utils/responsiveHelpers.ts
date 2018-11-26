import { Styles } from "react-jss"

export function mobileUpTo720 (styles: Styles): Styles {
	return {
		"@media (max-width: 720px)": {
			...styles
		}
	}
}

export function mobileUpTo1024 (styles: Styles): Styles {
	return {
		"@media (max-width: 1024px)": {
			...styles
		}
	}
}

export function mobileUpTo1200 (styles: Styles): Styles {
	return {
		"@media (max-width: 1200px)": {
			...styles
		}
	}
}
