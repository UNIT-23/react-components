import * as React from "react"

import { Fonts } from "../../theme"

interface IProps {
	readonly color?: string
	readonly width?: number
	readonly height?: number
	readonly className?: string
}

const ChatIcon: React.SFC<IProps> = ({
	color = "#C74343",
	width = Fonts.iconSize.width,
	height = Fonts.iconSize.height,
	className
}: IProps): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		id="Layer_1"
		x="0px"
		y="0px"
		viewBox="0 0 40 40"
		width={width}
		height={height}
		color={color}
		className={className}
	>
		<g>
			<polygon fill="#FFFFFF" points="6.5,37.5 6.5,2.5 24.8,2.5 33.5,11.2 33.5,37.5  " />
			<g>
				<path fill="#C74343" d="M24.6,3l8.4,8.4V37H7V3H24.6 M25,2H6v36h28V11L25,2L25,2z" />
			</g>
		</g>
		<g>
			<polygon fill="#FFD9D9" points="24.5,11.5 24.5,2.5 24.8,2.5 33.5,11.2 33.5,11.5  " />
			<g>
				<path fill="#C74343" d="M25,3.4l7.6,7.6H25V3.4 M25,2h-1v10h10v-1L25,2L25,2z" />
			</g>
		</g>
		<path
			fill="#C74343"
			// tslint:disable-next-line:max-line-length
			d="M13.2,30c-0.7,0-1.2-0.5-1.2-1c0-1.4,1.8-2.5,4.1-3.3c1-1.7,2-3.9,2.6-5.9c-0.6-1.5-0.9-2.8-0.9-3.8  c0-0.5,0.1-1,0.3-1.3c0.2-0.4,0.6-0.7,1.1-0.7c0.4,0,0.8,0.2,1,0.6c0.2,0.3,0.2,0.7,0.2,1.2c0,0.9-0.3,2.3-0.7,3.8  c0.7,1.6,1.7,3.3,2.8,4.6c1.8-0.2,3.3-0.1,4.1,0.2c1,0.3,1.2,0.9,1.2,1.3c0,0.4-0.2,1.4-1.9,1.4c-1.4,0-2.8-0.8-3.9-2  c-1.8,0.2-3.8,0.6-5.4,1.1C15.7,28.5,14.3,30,13.2,30z M13,29c0,0,0.1,0,0.2,0c0.5,0,1.3-0.7,2.1-1.9C13.9,27.7,13,28.4,13,29  C13,29,13,29,13,29z M23.6,25.3c0.8,0.7,1.7,1.1,2.5,1.1c0.9,0,0.9-0.3,0.9-0.4c0-0.2-0.4-0.3-0.5-0.4  C25.8,25.3,24.8,25.2,23.6,25.3z M19.3,21.1c-0.5,1.4-1.1,2.8-1.8,4.1c1.3-0.3,2.6-0.6,3.8-0.8C20.6,23.4,19.9,22.3,19.3,21.1z   M19.3,15c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.3-0.1,0.8c0,0.6,0.1,1.3,0.3,2.1c0.2-0.8,0.3-1.6,0.3-2.2c0-0.5-0.1-0.7-0.1-0.8  C19.4,15,19.3,15,19.3,15z"
		/>
	</svg>
)

export default ChatIcon
