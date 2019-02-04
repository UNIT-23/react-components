export function tableDataFormatter<T extends Record<keyof T, React.ReactNode>>(d: T): ITableData<T> {
	// tslint:disable:no-object-literal-type-assertion
	const formatedData = {} as Mutable<ITableData<T>>

	const keys = (Object.keys(d) as unknown) as ReadonlyArray<keyof T>

	keys.forEach((key: keyof T) => {
		// tslint:disable-next-line:no-object-mutation
		formatedData[key] = {
			value: d[key],
			component: d[key]
			// tslint:disable-next-line:no-any
		} as any
	})

	return formatedData as ITableData<T>
}
