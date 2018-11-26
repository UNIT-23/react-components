import { Fonts, Colors } from "../../../theme/"

import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	container: {},
	content: {
		background: ({ alertLevel }: IProps) =>
			({
				Success: Colors.primary,
				Warning: Colors.secondary,
				Error: Colors.danger
			}[alertLevel])
	},
	messageContainer: {
		display: "flex"
	},
	message: {
		fontSize: Fonts.size.medium,
		padding: "0 10px"
	},
	close: {
		transform: "rotate(45deg)"
	}
}
