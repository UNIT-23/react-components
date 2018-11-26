import { StyledComponentProps } from "react-jss"

import { SizeValue, StatusValue, PresenceValue } from "./AvatarValues"

export interface IProps extends StyledComponentProps {
	readonly photo?: string
	readonly name?: string
	readonly size?: SizeValue
	readonly status?: StatusValue
	readonly presence?: PresenceValue
}
