import React from "react"
import useSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const Loader: React.SFC<IProps> = ({ classes }: IProps): JSX.Element => (
	<div className={classes.container}>
		<div className={classes.barsContainer}>
			<div className={classes.defaultRect} />
			<div className={classes.rect2} />
			<div className={classes.rect3} />
			<div className={classes.rect4} />
			<div className={classes.rect5} />
		</div>
	</div>
)
export default useSheet(styles)(Loader)
