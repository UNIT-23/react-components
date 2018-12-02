import { IProps } from "../__types/IProps"

// tslint:disable-next-line:no-any
export const styles: any = {
	list: {
		width: ({ width }: IProps) => width || "60vw",
		"& ul": {
			padding: 0
		}
	}
}
