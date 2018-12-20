// tslint:disable:no-object-mutation
// tslint:disable-next-line:no-any
export function tableDataFormatter<T extends { readonly [key: string]: any }>(d: T) {
	const formatedData: ITableData = {}

	Object.keys(d)
		.filter((key: string) => key !== "bids")
		.filter((key: string) => key !== "avatarUrl")
		.forEach((key: string) => {
			// @ts-ignore
			formatedData[key] = {
				value: d[key],
				component: d[key]
			}
		})

	return formatedData
}
