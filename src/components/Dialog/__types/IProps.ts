export interface IProps {
	readonly open: boolean
	readonly title?: string
	readonly children?: React.ReactNode
	readonly agreeLabel?: string
	readonly disagreeLabel?: string
	onClose?(): void
	disagreeHandler?(): void
	agreeHandler?(): void
}
