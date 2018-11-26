import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
}

const Support: React.SFC<IProps> = ({ color = "#222", size = Fonts.iconSize.medium }: IProps): JSX.Element => (
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
		<circle cx="12" cy="12" r="4" />
		<line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
		<line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
		<line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
		<line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
		<line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
	</svg>
)

export default Support
