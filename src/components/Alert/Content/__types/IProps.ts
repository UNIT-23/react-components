import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly top?: number
	readonly canClose?: boolean
}
