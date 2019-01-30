
 import * as React from "react"
 import { Fonts } from "../../theme"

 interface IProps {
	readonly color?: string
	readonly width?: number
	readonly height?: number
	readonly className?: string

}

 const ExcelIcon: React.SFC<IProps> = ({
		color = "#247146",
		width= Fonts.iconSize.width,
		height= Fonts.iconSize.height,
	 className}: IProps): JSX.Element => (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 224 224"
			width={width}
			height={height}
			color={color}
			stroke={color}
			className={className}
		>
	<g transform="translate(7.952,7.952) scale(0.929,0.929)">
	<g
		fill="none"
		fill-rule="nonzero"
		stroke="none"
		stroke-width="none"
		stroke-linecap="butt"
		stroke-linejoin="none"
		stroke-miterlimit="10"
		stroke-dasharray=""
		stroke-dashoffset="0"
		font-family="none"
		font-weight="none"
		font-size="none"
		text-anchor="none"
	>
		<g stroke="#247146" stroke-width="16" stroke-linejoin="round">
		<g id="surface1 1">
			<path
			 d="M186.66667,210h-149.33333v-196h102.66667l46.66667,46.66667z"
			 fill="white"
			/>
			<path d="M179.66667,65.33333h-44.33333v-44.33333z" fill="#247146"/>
			<path
				d="M110.77864,123.46614l9.77083,-19.85156h16.44271l-16.69792,29.62239l17.15364,30.09636h-16.625l-10.04427,
             -20.21614l-10.04427,20.21614h-16.57032l17.09896,-30.09636l-16.64323,-29.62239h16.40625z"
			 fill="#247146"
			/>
		</g>
		</g>
		<path
		 d="M0,224v-224h224v224z"
		 fill="none"
		 stroke="none"
		 stroke-width="1"
		 stroke-linejoin="miter"
		/>
		<g stroke="none" stroke-width="1" stroke-linejoin="miter">
		<g id="surface1">
			<path
			 d="M186.66667,210h-149.33333v-196h102.66667l46.66667,46.66667z"
			 fill="white"
			/>
			<path d="M179.66667,65.33333h-44.33333v-44.33333z" fill="#247146" />
			<path
				d="M110.77864,123.46614l9.77083,-19.85156h16.44271l-16.69792,29.62239l17.15364,30.09636h-16.625l-10.04427,
                -20.21614l-10.04427,20.21614h-16.57032l17.09896,-30.09636l-16.64323,-29.62239h16.40625z"
			 fill="#247146"
			/>
		</g>
		</g>
		<path
		 d=""
		 fill="none"
		 stroke="none"
		 stroke-width="1"
		 stroke-linejoin="miter"
		/>
		<path
		 d=""
		 fill="none"
		 stroke="none"
	     strokeWidth="1"
		 stroke-linejoin="miter"
		/>
		<path
		 d=""
		 fill="none"
		 stroke="none"
		 stroke-width="1"
		 stroke-linejoin="miter"
		/>
	</g>
  </g>
  </svg>

)

 export default ExcelIcon
