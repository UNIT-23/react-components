import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly fill?: string
	readonly size?: number
}
// tslint:disable:max-line-length
const ChevronUpIcon: React.SFC<IProps> = ({
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
		<path
			d="M1.39062 8.70312L8 2.05859L14.6094 8.70312L15.4531 7.85938L8.42188 0.828125L8 0.476562L7.57812 0.828125L0.546875 7.85938L1.39062 8.70312Z"
			fill={color}
		/>
	</svg>
)

export default ChevronUpIcon
