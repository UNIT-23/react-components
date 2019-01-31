import * as React from "react"
import TableCell from "@material-ui/core/TableCell"
import Tooltip from "@material-ui/core/Tooltip"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Typography from "@material-ui/core/Typography"

import { HeaderRowValues } from "./__types/HeaderRowValues"

import { IProps } from "./__types/IProps"
import materialThemeWrapper from "../../../../MaterialThemeWrapper/MaterialThemeWrapper"
import { withStyles } from "@material-ui/core"
import { styles } from "./styles"

const createSortHandler: Function = (property: number, onRequestSort: Function): Function => (event: Event): void =>
	onRequestSort(event, property)

function HeaderRow<TData>({ id, label, orderBy, orderType, onRequestSort, classes }: IProps<TData>): JSX.Element {
	return (
		<TableCell sortDirection={orderBy === id ? orderType : false} className={classes.root}>
			{!!onRequestSort && (
				<Tooltip title="Sort" enterDelay={HeaderRowValues.enterDelay}>
					<TableSortLabel
						active={orderBy === id}
						direction={orderType}
						onClick={createSortHandler(id, onRequestSort)}
					>
						<Typography color="inherit" align="center" variant="caption">
							{label}
						</Typography>
					</TableSortLabel>
				</Tooltip>
			)}
		</TableCell>
	)
}

// TODO: Remove class
export default class WrappedHeaderRpw<T> extends React.Component<
	WrappedHeaderRpw<T>["C"] extends React.ComponentType<infer P> ? P : never,
	{}
> {
	private readonly C = materialThemeWrapper<IProps<T>>(
		withStyles(styles)((props: JSX.LibraryManagedAttributes<typeof HeaderRow, IProps<T>>) => (
			<HeaderRow<T> {...props} />
		))
	)
	public render() {
		return <this.C {...this.props} />
	}
}
