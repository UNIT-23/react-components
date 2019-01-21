import { Theme } from "../../../theme"

import { IProps } from "../__types/IProps"
import { IReactStyle } from "../__types/IReactStyle"
import { LoaderValues } from "../__types/LoaderValues"

const react: IReactStyle = {
	height: "100%",
	width: 6,
	display: "inline-block",
	animation: "blockAnimation 1.2s infinite ease-in-out",
	animationDuration: `${LoaderValues.animationDuration}s`
}

// tslint:disable-next-line:no-any
export const styles: any = (theme: typeof Theme) => ({
	container: {
		position: "relative",
		top: "45%",
		left: "40%"
	},
	barsContainer: {
		width: 50,
		textAlign: "center",
		fontSize: 10,
		height: 30
	},
	"@keyframes blockAnimation": {
		"0%, 40%, 100%": { transform: "scaleY(0.4)" },
		"20%": { transform: "scaleY(1)" }
	},
	defaultRect: {
		backgroundColor: ({ color }: IProps): string => color || theme.primary,
		extend: react
	},
	rect2: {
		extend: react,
		backgroundColor: ({ color }: IProps): string => color || theme.primary,
		animationDelay: `-${LoaderValues.animationDuration - LoaderValues.react2Delay}s`
	},
	rect3: {
		extend: react,
		backgroundColor: ({ color }: IProps): string => color || theme.primary,
		animationDelay: `-${LoaderValues.animationDuration - LoaderValues.react3Delay}s`
	},
	rect4: {
		extend: react,
		backgroundColor: ({ color }: IProps): string => color || theme.primary,
		animationDelay: `-${LoaderValues.animationDuration - LoaderValues.react4Delay}s`
	},
	rect5: {
		extend: react,
		backgroundColor: ({ color }: IProps): string => color || theme.primary,
		animationDelay: `-${LoaderValues.animationDuration - LoaderValues.react5Delay}s`
	}
})
