import * as React from "react"
import injectSheet from "react-jss"
import posed from "react-pose"

import Card from "../Card/Card"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const Modal = posed.div({
	enter: {
		applyAtStart: { y: 0 },
		height: "80vh",
		marginBottom: 40,
		beforeChildren: true,
		staggerChildren: 50,
		transition: {
			default: { ease: "easeOut", duration: 1000 }
		}
	},
	exit: {
		height: "0vh",
		marginBottom: 0,
		transition: {
			default: { ease: "easeOut", duration: 300 }
		},
		applyAtEnd: { y: -10000 }
	}
})

const Child = posed.div({
	exit: {
		opacity: 0
	},
	enter: {
		opacity: 1
	}
})

const Drawer: React.SFC<IProps> = ({ openModel, children, classes }: IProps) => (
	<Modal pose={openModel ? "enter" : "exit"} className={classes.drawer}>
		<Child pose={openModel ? "enter" : "exit"} className={classes.child}>
			<Card>{children}</Card>
		</Child>
	</Modal>
)

export default injectSheet(styles)(Drawer)
