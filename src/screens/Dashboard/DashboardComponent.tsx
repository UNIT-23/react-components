import * as React from "react"
import { connect } from "react-redux"
import injectSheet from "react-jss"

import Button from "../../components/Button/Button"

import Avatar from "../../components/Avatar/Avatar"
import AlertIcon from "../../components/Icons/AlertIcon"
import ArrowLeftIcon from "../../components/Icons/ArrowLeftIcon"
import CalendarIcon from "../../components/Icons/CalendarIcon"
import ChatIcon from "../../components/Icons/ChatIcon"
import CheckIcon from "../../components/Icons/CheckIcon"
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon"
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon"
import CircleIcon from "../../components/Icons/CircleIcon"
import ClockIcon from "../../components/Icons/ClockIcon"
import DollarIconIcon from "../../components/Icons/DollarIcon"
import EditIcon from "../../components/Icons/EditIcon"
import GearIcon from "../../components/Icons/GearIcon"
import ListIcon from "../../components/Icons/ListIcon"
import MetricsIcon from "../../components/Icons/MetricsIcon"
import PlusIcon from "../../components/Icons/PlusIcon"
import RefreshIcon from "../../components/Icons/RefreshIcon"
import SendIcon from "../../components/Icons/SendIcon"
import SupportIcon from "../../components/Icons/SupportIcon"
import TrashIcon from "../../components/Icons/TrashIcon"
import UsersIcon from "../../components/Icons/UsersIcon"
import UserIcon from "../../components/Icons/UserIcon"

import { openAlert } from "../../appstate/actions/alert/alertActions"

import { IProps } from "./__types/IProps"

import { styles } from "./styles/"
import ApiSuspense from "../../components/ApiSuspense/ApiSuspense"
import { API } from "../../models/ApiState"
import Inputs from "./Inputs/Inputs"
import Loader from "../../components/Loader/Loader"
import TableExample from "./TableExample/TableExample"

class DashboardComponent extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.showAlert = this.showAlert.bind(this)
	}

	private showAlert() {
		const { dispatch } = this.props

		dispatch(openAlert({ message: "Dummy Alert here nothing to worry!" }))
	}

	public render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<h3>React Components</h3>
				<div>Available Components</div>
				<div>
					<div>
						<Button onClick={this.showAlert}>Alert</Button>
					</div>
					<div>
						<div>ApiSuspense</div>
						<div>
							<ApiSuspense apiState={API.REQUEST_PENDING}>Loaded</ApiSuspense>
						</div>
					</div>
					<div>
						<div>Avatar</div>
						<Avatar />
					</div>
					<div>
						<div>Button</div>
						<Button>Button</Button>
					</div>
					<div>
						<div>Icons</div>
						<div>
							<span>AlertIcon</span>
							<AlertIcon />
						</div>
						<div>
							<span>ArrowLeftIcon</span>
							<ArrowLeftIcon />
						</div>
						<div>
							<span>CalendarIcon</span>
							<CalendarIcon />
						</div>
						<div>
							<span>ChatIcon</span>
							<ChatIcon />
						</div>
						<div>
							<span>CheckIcon</span>
							<CheckIcon />
						</div>
						<div>
							<span>ChevronLeftIcon</span>
							<ChevronLeftIcon />
						</div>
						<div>
							<span>ChevronRightIcon</span>
							<ChevronRightIcon />
						</div>
						<div>
							<span>CircleIcon</span>
							<CircleIcon />
						</div>
						<div>
							<span>ClockIcon</span>
							<ClockIcon />
						</div>
						<div>
							<span>DollarIconIcon</span>
							<DollarIconIcon />
						</div>
						<div>
							<span>EditIcon</span>
							<EditIcon />
						</div>
						<div>
							<span>GearIcon</span>
							<GearIcon />
						</div>
						<div>
							<span>ListIcon</span>
							<ListIcon />
						</div>
						<div>
							<span>MetricsIcon</span>
							<MetricsIcon />
						</div>
						<div>
							<span>PlusIcon</span>
							<PlusIcon />
						</div>
						<div>
							<span>RefreshIcon</span>
							<RefreshIcon />
						</div>
						<div>
							<span>SendIcon</span>
							<SendIcon />
						</div>
						<div>
							<span>SupportIcon</span>
							<SupportIcon />
						</div>
						<div>
							<span>TrashIcon</span>
							<TrashIcon />
						</div>
						<div>
							<span>UserIcon</span>
							<UserIcon />
						</div>
						<div>
							<span>UsersIcon</span>
							<UsersIcon />
						</div>
					</div>
					<div>
						<div>Input Fields</div>
						<div>
							<Inputs />
						</div>
					</div>
					<div>
						<div>Loader</div>
						<Loader />
					</div>
					<div>
						<div>Table</div>
						<TableExample />
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(injectSheet(styles)(DashboardComponent))
