import * as React from "react"

import { Fonts, Theme } from "../../theme"

interface IProps {
	readonly color?: string
	readonly size?: number
	readonly className?: string
}

const PlusIcon: React.SFC<IProps> = (
	{
		color = Theme.secondary,
		size = Fonts.iconSize.mini ,
		className
	}: IProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="white"
		color={color}
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="8" x2="12" y2="16" />
		<line x1="8" y1="12" x2="16" y2="12" />
	</svg>
)

export default PlusIcon
