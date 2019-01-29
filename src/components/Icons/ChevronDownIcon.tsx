// tslint:disable:max-line-length
import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly fill?: string
	readonly size?: number
}

const ChevronDownIcon: React.SFC<IProps> = ({
	color = "#222",
	size = Fonts.iconSize.medium,
	fill = "none"
}: IProps): JSX.Element => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		x={size}
		y={size}
		width={size}
		height={size}
		viewBox="0 0 16 9"
		xmlSpace="preserve"
		fill={color}
		style={{ color, background: fill }}
	>
		<g>
			<path
				fill={color}
				d="M1.39062 0.296875L8 6.94141L14.6094 0.296875L15.4531 1.14062L8.42188 8.17188L8 8.52344L7.57812 8.17188L0.546875 1.14062L1.39062 0.296875Z"
			/>
		</g>
	</svg>
)

export default ChevronDownIcon
