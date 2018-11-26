import * as React from "react"
import useSheet from "react-jss"
// @ts-ignore
import AtlasAvatar from "@atlaskit/avatar"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"

const Avatar = ({ photo, name, size, status, presence, classes }: IProps) => (
	<div className={classes.avatar}>
		<AtlasAvatar
			name={name}
			size={size}
			status={status}
			presence={presence}
			src={photo} // Only send req if photo is not null else assign null
		/>
	</div>
)

export default React.memo(useSheet(styles)(Avatar))
