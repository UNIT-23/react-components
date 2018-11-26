import * as React from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import AuthRoute from "./AuthRoute/AuthRoute"

import Alert from "../components/Alert/Alert"
import Loader from "../components/Loader/Loader"

const DashboardComponent = React.lazy(() => import("../screens/Dashboard/DashboardComponent"))

const MainRoute = (): JSX.Element => (
	<div>
		<Router>
			<React.Suspense fallback={<Loader />}>
				<Switch>
					<AuthRoute path="/" exact isAuth={true} component={DashboardComponent} />
					<AuthRoute path="/posts/:id" exact isAuth={true} component={DashboardComponent} />
				</Switch>
			</React.Suspense>
		</Router>
		<Alert />
	</div>
)

export default MainRoute
