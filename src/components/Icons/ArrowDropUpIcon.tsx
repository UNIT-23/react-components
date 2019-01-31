import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly fill?: string
	readonly size?: number
}

const ArrowDropUpIcon: React.SFC<IProps> = ({
	color = "#222",
	size = Fonts.iconSize.mini,
	fill = "none"
}: IProps): JSX.Element => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		x={size}
		y={size}
		width={size}
		height={size}
		viewBox="0 0 14 7"
		xmlSpace="preserve"
		fill={color}
		style={{ color, background: fill }}
	>
		<path d="M0.82 4.68L5 0.5L9.18 4.68H0.82Z" fill={color} />
	</svg>
)

export default ArrowDropUpIcon
