import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
}

const CircleIcon: React.SFC<IProps> = ({ color = "#222", size = Fonts.iconSize.medium }: IProps): JSX.Element => (
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
	>
		<circle cx="12" cy="12" r="10" />
	</svg>
)

export default CircleIcon
