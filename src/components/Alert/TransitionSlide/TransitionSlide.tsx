import * as React from "react"
import Slide from "@material-ui/core/Slide"

import { IProps } from "./__types/IProps"

const TransitionSlide = (transitionProps: IProps) => <Slide {...transitionProps} direction="left" />

export default TransitionSlide
