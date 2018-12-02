import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly width?: string | number
	readonly closeDrawer: () => void
	readonly openModel: boolean
}
