import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
	readonly className?: string

}

const ChevronLeftIcon: React.SFC<IProps> = ({ color = "#222", size = Fonts.iconSize.medium, className }: IProps): JSX.Element => (
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
		className={className}
	>
		<polyline points="15 18 9 12 15 6" />
	</svg>
)

export default ChevronLeftIcon
