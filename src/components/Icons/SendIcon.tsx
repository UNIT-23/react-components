import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
}

const SendIcon: React.SFC<IProps> = ({ color = "#222", size = Fonts.iconSize.medium }: IProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		color={color}
		stroke="currentColor"
		strokeWidth="1"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-send"
	>
		<line x1="22" y1="2" x2="11" y2="13" />
		<polygon points="22 2 15 22 11 13 2 9 22 2" />
	</svg>
)

export default SendIcon
