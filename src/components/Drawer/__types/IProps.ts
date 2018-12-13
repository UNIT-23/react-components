import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly width?: string | number
	readonly height?: string | number
	closeDrawer(event: React.MouseEvent): void
	readonly openModel: boolean
}
