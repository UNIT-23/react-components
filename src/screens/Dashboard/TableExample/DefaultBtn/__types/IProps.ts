import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	handleSearch(event: React.ChangeEvent<HTMLInputElement>): void
	readonly filter: string
}
