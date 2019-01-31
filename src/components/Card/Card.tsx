import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Card = ({ Icon, Heading, Controls, children, classes }: IProps) => (
	<div className={classes.container}>
		{Heading && (
			<div className={classes.headingContainer}>
				<div className={classes.leftHeading}>
					<div className={classes.icon}>{Icon}</div>
					<div className={classes.headingText}>{Heading}</div>
				</div>
				<div className={classes.rightHeading}>{Controls}</div>
			</div>
		)}
		<div className={classes.content}>{children}</div>
	</div>
)

export default injectSheet(styles)(Card)
