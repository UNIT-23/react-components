import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "../styles"

const Container = ({ classes }: IProps) => <div className={classes.container} />

export default injectSheet(styles)(Container)
