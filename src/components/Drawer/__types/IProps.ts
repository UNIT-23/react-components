import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly openModel: boolean
	readonly children: React.ReactNode
}
