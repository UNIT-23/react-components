import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly children: React.ReactNode
	readonly Controls?: React.ReactNode
	readonly Heading?: React.ReactNode
	readonly Icon?: React.ReactNode
	readonly width?: number | string
}
