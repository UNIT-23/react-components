import { TransitionProps } from "@material-ui/core/transitions/transition"
import { StyledComponentProps } from "react-jss"
export interface IProps extends TransitionProps, StyledComponentProps {
    readonly open?: boolean
    readonly handleClose?: () => void
    readonly handleOpen?: () => void
}
