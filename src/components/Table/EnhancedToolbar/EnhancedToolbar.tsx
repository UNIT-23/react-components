import * as React from "react"
import { withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import { IProps } from "./__types/IProps"

import styles from "./styles/"

const EnhancedTableToolbar: React.SFC<IProps> = ({
	tableTitle,
	numSelected,
	DefaultBtn,
	SearchBar,
	SelectedBtn,
	classes
}: IProps): JSX.Element => (
	<Toolbar className={`${numSelected > 0 && classes.highlight}`}>
		<div className={classes.title}>
			{numSelected > 0 ? (
				<Typography color="inherit" variant="subtitle1">
					{numSelected} selected
				</Typography>
			) : (
				tableTitle
			)}
		</div>
		<div className={classes.searchBarSpacer} />
		<div className={classes.searchBar}>{SearchBar && <>{SearchBar}</>}</div>
		<div className={classes.actionButtonSpacer} />
		<div className={classes.actions}>
			{numSelected > 0 ? SelectedBtn && <>{SelectedBtn}</> : DefaultBtn && <>{DefaultBtn}</>}
		</div>
	</Toolbar>
)

export default withStyles(styles)(EnhancedTableToolbar)
