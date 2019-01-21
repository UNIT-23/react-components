import * as React from "react"

import Button from "../../Button/Button"
import InputField from "../../InputField/InputField"

import { InputTypes } from "../../../models/InputTypes"

import { IProps } from "./__types/IProps"
import { Values } from "./__types/Values"

class Pagination extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
		this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
	}

	private readonly rowsPerPageOptions: ReadonlyArray<IDropDownData> = [
		{ label: "5", value: 5 },
		{ label: "10", value: 10 },
		{ label: "25", value: 25 }
	]

	public goToPageHandler(page: number): (event: React.MouseEvent<HTMLButtonElement>) => void {
		return (event: React.MouseEvent<HTMLButtonElement>) => {
			const indexZeroAdjustedPage = page - 1

			this.props.onChangePage(event, indexZeroAdjustedPage)
		}
	}

	// NOTE: Just in case there is requirement for first Last buttons
	// Public handleFirstPageButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
	// 	This.props.onChangePage(event, 0)
	// }

	// Public handleLastPageButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
	// 	This.props.onChangePage(event, Math.max(0, this.maxPages()-1))
	// }

	public handleBackButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
		const prvPage = this.props.page - 1

		this.props.onChangePage(event, prvPage > 0 ? prvPage : 0)
	}

	public handleNextButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
		const { onChangePage, page } = this.props

		const nextPage = page + 1
		const maxPages = Math.max(0, this.maxPages() - 1)

		onChangePage(event, nextPage <= maxPages ? nextPage : page)
	}

	private maxPages(): number {
		return Math.ceil(this.props.count / this.props.rowsPerPage)
	}

	private getNavButtonNumber(index: number, page: number, maxPages: number): number {
		const maxButtons = maxPages > Values.maxButtons ? Values.maxButtons : maxPages
		const diffFromLastButton = maxButtons - index
		const diffFromAbsoluteLastPage = maxPages - diffFromLastButton

		const normalCurrentButtonLabel = page + index

		return normalCurrentButtonLabel > diffFromAbsoluteLastPage ? diffFromAbsoluteLastPage : normalCurrentButtonLabel
	}

	public render(): JSX.Element {
		const { page, count, rowsPerPage, onChangeRowsPerPage } = this.props

		const maxPages = this.maxPages()

		const buttonLabel1 = this.getNavButtonNumber(Values.buttonLabel1, page, maxPages)
		const buttonLabel2 = this.getNavButtonNumber(Values.buttonLabel2, page, maxPages)
		const buttonLabel3 = this.getNavButtonNumber(Values.buttonLabel3, page, maxPages)
		const buttonLabel4 = this.getNavButtonNumber(Values.buttonLabel4, page, maxPages)
		const buttonLabel5 = this.getNavButtonNumber(Values.buttonLabel5, page, maxPages)

		return (
			<div
				style={{
					display: "flex"
				}}
			>
				<div>
					<Button buttonType="square" onClick={this.handleBackButtonClick}>
						{"<"}
					</Button>
					{maxPages >= Values.buttonLabel1 && (
						<Button buttonType="square" onClick={this.goToPageHandler(buttonLabel1)}>
							{buttonLabel1}
						</Button>
					)}
					{maxPages >= Values.buttonLabel2 && (
						<Button buttonType="square" onClick={this.goToPageHandler(buttonLabel2)}>
							{buttonLabel2}
						</Button>
					)}
					{maxPages >= Values.buttonLabel3 && (
						<Button buttonType="square" onClick={this.goToPageHandler(buttonLabel3)}>
							{buttonLabel3}
						</Button>
					)}
					{maxPages >= Values.buttonLabel4 && (
						<Button buttonType="square" onClick={this.goToPageHandler(buttonLabel4)}>
							{buttonLabel4}
						</Button>
					)}
					{maxPages >= Values.buttonLabel5 && (
						<Button buttonType="square" onClick={this.goToPageHandler(buttonLabel5)}>
							{buttonLabel5}
						</Button>
					)}
					<Button buttonType="square" onClick={this.handleNextButtonClick}>
						{">"}
					</Button>
				</div>
				<div>
					<div>Showing</div>
					<div style={{ width: 120 }}>
						<InputField
							inputType={InputTypes.Select}
							isMulti={false}
							input={{
								value: { label: rowsPerPage, value: rowsPerPage },
								onChange: onChangeRowsPerPage
							}}
							options={this.rowsPerPageOptions}
						/>
					</div>
				</div>
				<div>of {count}</div>
			</div>
		)
	}
}

export default Pagination
