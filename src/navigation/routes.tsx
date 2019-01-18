import * as React from "react"
import { connect } from "react-redux"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import AuthorizeRoute from "./AuthorizeRoute/AuthorizeRoute"

import Alert from "../components/Alert/Alert"
import Loader from "../components/Loader/Loader"

import { IProps } from "./__types/IProps"

const DashboardComponent = React.lazy(() => import("../screens/Dashboard/DashboardComponent"))

const MainRoute = ({ alertState, message, alertLevel, dispatch }: IProps): JSX.Element => (
	<div>
		<Router basename={process.env.PUBLIC_URL}>
			<React.Suspense fallback={<Loader />}>
				<Switch>
					<AuthorizeRoute exact isAuth={true} path="/" component={DashboardComponent} />
					<AuthorizeRoute exact isAuth={true} path="/posts/:id" component={DashboardComponent} />
				</Switch>
			</React.Suspense>
		</Router>
		<Alert alertState={alertState} message={message} alertLevel={alertLevel} dispatch={dispatch} />
	</div>
)

export default connect(({ alert }: IRootState) => ({
	alertState: alert.alertState,
	message: alert.message,
	alertLevel: alert.alertLevel
}))(MainRoute)
