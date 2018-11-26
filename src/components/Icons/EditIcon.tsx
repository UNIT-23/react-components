import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
}

const Edit: React.SFC<IProps> = ({ color = "#222", size = Fonts.iconSize.medium }: IProps): JSX.Element => (
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
		className="feather feather-edit"
	>
		<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
		<polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
	</svg>
)

export default Edit
