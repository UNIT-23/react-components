import React from "react"
import { withStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"

import ChevronLeftIcon from "../Icons/ChevronLeftIcon"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

import { styles } from "./styles/"

class ControlledExpansionPanels extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.state = {
			expanded: "panel1"
		}
	}

	private handleChange(panel: string) {
		return (_event: React.ChangeEvent<{}>, expanded: boolean) => {
			this.setState({
				expanded: expanded ? panel : "panel1"
			})
		}
	}

	public render() {
		const { classes } = this.props
		const { expanded } = this.state

		return (
			<div className={classes.root}>
				<ExpansionPanel expanded={expanded === "panel1"} onChange={this.handleChange("panel1")}>
					<ExpansionPanelSummary expandIcon={<ChevronLeftIcon />}>
						<Typography className={classes.heading}>General settings</Typography>
						<Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus
							est, id dignissim quam.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === "panel2"} onChange={this.handleChange("panel2")}>
					<ExpansionPanelSummary expandIcon={<ChevronLeftIcon />}>
						<Typography className={classes.heading}>Users</Typography>
						<Typography className={classes.secondaryHeading}>You are currently not an owner</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam
							eros in elit. Pellentesque convallis laoreet laoreet.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === "panel3"} onChange={this.handleChange("panel3")}>
					<ExpansionPanelSummary expandIcon={<ChevronLeftIcon />}>
						<Typography className={classes.heading}>Advanced settings</Typography>
						<Typography className={classes.secondaryHeading}>
							Filtering has been entirely disabled for whole web server
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
							vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === "panel4"} onChange={this.handleChange("panel4")}>
					<ExpansionPanelSummary expandIcon={<ChevronLeftIcon />}>
						<Typography className={classes.heading}>Personal data</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
							vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}
}

export default withStyles(styles)(ControlledExpansionPanels)
