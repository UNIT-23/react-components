import { Fonts, Theme } from "../../../theme/"

import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = (theme: typeof Theme) => ({
	container: {},
	content: {
		background: ({ alertLevel }: IProps) =>
			({
				Success: theme.primary,
				Warning: theme.secondary,
				Error: theme.danger
			}[alertLevel])
	},
	messageContainer: {
		display: "flex"
	},
	message: {
		fontSize: Fonts.size.regular,
		padding: "0 10px"
	},
	close: {
		transform: "rotate(45deg)"
	}
})
