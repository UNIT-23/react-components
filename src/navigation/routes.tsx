import * as React from "react"
import { connect } from "react-redux"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import AuthRoute from "./AuthRoute/AuthRoute"

import Alert from "../components/Alert/Alert"
import Loader from "../components/Loader/Loader"

import { IProps } from "./__types/IProps"

const DashboardComponent = React.lazy(() => import("../screens/Dashboard/DashboardComponent"))

const MainRoute = ({ alertState, message, alertLevel, dispatch }: IProps): JSX.Element => (
	<div>
		<Router basename={process.env.PUBLIC_URL}>
			<React.Suspense fallback={<Loader />}>
				<Switch>
					<AuthRoute path="/" exact isAuth={true} component={DashboardComponent} />
					<AuthRoute path="/posts/:id" exact isAuth={true} component={DashboardComponent} />
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
