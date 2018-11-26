// tslint:disable:no-object-mutation

import axios from "axios"

export const appBaseUrl = "https://jsonplaceholder.typicode.com"

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json"
	}
})

const apiGq = axios.create({
	baseURL: `${appBaseUrl}/api/graphql`,
	timeout: 15000,
	headers: { "Content-Type": "application/json" }
})

export function runGqlQueries(query: string, token: string) {
	apiGq.defaults.headers = { "x-access-token": token }

	return apiGq.post(null, { query })
}

export function getPosts({ limit = 10, offset = 0, filter = "" }) {
	if (filter) {
		return api.get(`/comments?q=${filter}`)
	}

	return api.get(`/comments?_page=${offset}&_limit=${limit}`)
}
