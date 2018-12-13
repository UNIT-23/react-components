import * as React from "react"

import Loader from "../Loader/Loader"

import { API } from "../../models/ApiState"

import { IProps } from "./__types/IProps"

const ApiSuspense = ({ apiState, children }: IProps) => {
	if (apiState === API.REQUEST_PENDING) {
		return <Loader color="#fff" />
	}

	return <>{children}</>
}

export default ApiSuspense
