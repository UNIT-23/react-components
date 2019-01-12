import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "../styles"

const Life = ({ life, classes }: IProps) => <div style={{ right: life }} className={classes.container} />

export default injectSheet(styles)(Life)
