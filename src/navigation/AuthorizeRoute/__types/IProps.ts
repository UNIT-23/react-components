export interface IProps {
	readonly isAuth: boolean
	readonly exact: boolean
	readonly path: string
	// tslint:disable-next-line:no-any
	readonly component: React.LazyExoticComponent<any>
}
