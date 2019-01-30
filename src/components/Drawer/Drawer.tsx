import * as React from "react"
import injectSheet from "react-jss"
import posed from "react-pose"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles/"

const Modal = posed.div({
	enter: {
		height: "80vh",
		transition: {
			backgroundColor: { ease: "easeOut", duration: 1700 },
			default: { ease: "linear", duration: 500 }
		}
	},
	exit: {
		height: 0,
		transition: {
			backgroundColor: { ease: "easeOut", duration: 300 },
			default: { ease: "linear", duration: 300 }
		}
	}
})

// const Shade = posed.div({
// 	enter: { backgroundColor: "#ffffff00" },
// 	exit: { backgroundColor: "#ffffffff" }
// })

class Drawer extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			show: false
		}

		this.toggleDrawer = this.toggleDrawer.bind(this)
	}

	public toggleDrawer() {
		this.setState({
			show: false
		})
	}

	public render() {
		const { openModel, children } = this.props

		return <Modal pose={openModel ? "enter" : "exit"}>{children}</Modal>
	}
}

export default injectSheet(styles)(Drawer)
