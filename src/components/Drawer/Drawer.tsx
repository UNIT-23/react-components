import * as React from "react"
import injectSheet from "react-jss"
import posed from "react-pose"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const Modal = posed.div({
	enter: {
		applyAtStart: { y: 0 },
		height: "80vh",
		opacity: 1,
		transition: {
			opacity: { ease: "easeOut", duration: 1500 },
			default: { ease: "linear", duration: 500 }
		}
	},
	exit: {
		height: "0vh",
		opacity: 0,
		transition: {
			opacity: { ease: "easeOut", duration: 300 },
			default: { ease: "linear", duration: 300 }
		},
		applyAtEnd: { y: -10000 }
	}
})

const Drawer: React.SFC<IProps> = ({ openModel, children }: IProps) => (
	<Modal pose={openModel ? "enter" : "exit"}>{children}</Modal>
)

export default injectSheet(styles)(Drawer)
