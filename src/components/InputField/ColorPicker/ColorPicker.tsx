import * as React from "react"
import injectSheet from "react-jss"

import { styles } from "./styles"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { ChromePicker, ColorResult } from "react-color"
import ChevronDownIcon from "../../Icons/ChevronDownIcon"
import ChevronUpIcon from "../../Icons/ChevronUpIcon"
import { Fonts } from "../../../theme"

class ColorPicker extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			displayColorPicker: false,
			color: {
				r: 222,
				g: 111,
				b: 104,
				a: 1
			}
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}

	public handleClick() {
		this.setState({ displayColorPicker: !this.state.displayColorPicker })
	}

	public handleClose() {
		this.setState({ displayColorPicker: false })
	}

	public handleChange(color: ColorResult) {
		const { onChange } = this.props
		this.setState({ color: color.rgb })

		onChange(color)
	}

	public render() {
		const { classes, theme } = this.props
		const { displayColorPicker } = this.state

		return (
			<div>
				<div className={classes.swatch} onClick={this.handleClick}>
					<div className={classes.color} />
					{displayColorPicker ? (
						<ChevronUpIcon size={Fonts.iconSize.small} color={theme.icons} />
					) : (
						<ChevronDownIcon size={Fonts.iconSize.small} color={theme.icons} />
					)}
				</div>

				{displayColorPicker ? (
					<div className={classes.popover}>
						<div className={classes.cover} onClick={this.handleClose} />
						<ChromePicker color={this.state.color} onChange={this.handleChange} />
					</div>
				) : null}
			</div>
		)
	}
}

export default injectSheet(styles)(ColorPicker)
