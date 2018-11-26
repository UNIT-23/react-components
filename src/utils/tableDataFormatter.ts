// tslint:disable-next-line:no-any
export function tableDataFormatter<T extends { readonly [key: string]: any }>(d: T) {
	const formatedData: {
		// tslint:disable-next-line:readonly-keyword
		[key: string]: ITableData
	} = {}

	Object.keys(d)
		.filter((key: string) => key !== "bids")
		.filter((key: string) => key !== "avatarUrl")
		.forEach((key: string) => {
			// tslint:disable-next-line:no-object-mutation
			formatedData[key] = {
				value: d[key],
				component: d[key]
			}
		})

	return formatedData
}
