import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
}

const ListIcon: React.SFC<IProps> = ({ color = "#222", size = Fonts.iconSize.medium }: IProps): JSX.Element => (
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
		<line x1="8" y1="6" x2="21" y2="6" />
		<line x1="8" y1="12" x2="21" y2="12" />
		<line x1="8" y1="18" x2="21" y2="18" />
		<line x1="3" y1="6" x2="3" y2="6" />
		<line x1="3" y1="12" x2="3" y2="12" />
		<line x1="3" y1="18" x2="3" y2="18" />
	</svg>
)

export default ListIcon
