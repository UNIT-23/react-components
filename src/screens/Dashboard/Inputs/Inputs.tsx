import * as React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"

import InputField from "../../../components/InputField/InputField"

import { validate } from "../../../services/validate/validationService"

import { mockedUsers } from "../../../utils/mockedUsers"

import { InputTypes } from "../../../models/InputTypes"

import { IProps } from "./__types/IProps"
import { IForm } from "./__types/IForm"

class Inputs extends React.Component<IProps> {
	public constructor(props: IProps) {
		super(props)

		this.submitHandler = this.submitHandler.bind(this)
	}

	public submitHandler(value: IForm) {
		console.log("====================================")
		console.log(value)
		console.log("====================================")
	}

	public render() {
		const { handleSubmit } = this.props

		return (
			<form onSubmit={handleSubmit(this.submitHandler)}>
				<div>
					<div>
						<label htmlFor="email">Simple Email Input</label>
					</div>
					<Field
						autoFocus
						component={InputField}
						name="email"
						placeholder="Enter your email"
						type="email"
						autoComplete="email"
						id="email"
					/>
				</div>
				<div>
					<div>
						<label htmlFor="message">TextArea Type</label>
					</div>
					<Field
						component={InputField}
						name="message"
						placeholder="Message..."
						inputType={InputTypes.Textarea}
						type="text"
						id="message"
					/>
				</div>
				<div>
					<div>
						<label htmlFor="switchTypeInput">Switch Type</label>
					</div>
					<Field
						component={InputField}
						name="switchTypeInput"
						inputType={InputTypes.Switch}
						type="checkbox"
						id="switchTypeInput"
					/>
				</div>
				<div>
					<div>
						<label htmlFor="switchTypeInput">Checkbox Type</label>
					</div>
					<Field
						component={InputField}
						name="checkboxTypeInput"
						inputType={InputTypes.Checkbox}
						type="checkbox"
						id="checkboxTypeInput"
					/>
				</div>
				<div>
					<div>
						<label htmlFor="switchTypeInput">Checkbox Type</label>
					</div>
					<Field
						component={InputField}
						name="recipients"
						inputType="select"
						isMulti="true"
						closeMenuOnSelect={false}
						placeholder="Select Recipients"
						options={mockedUsers.map((u: { readonly [key: string]: string }, id: number) => ({
							value: id,
							label: u.name
						}))}
					/>
				</div>
				<div>
					<div>
					<label htmlFor="calender">Calender</label>

					</div>
					<Field
							autoFocus
							enableBackDates={true}
							component={InputField}
							inputType={InputTypes.Calender}
							name="referenceDate"
							id="calender"
							formats="YYYY-MM-DD"
							type="single"
					/>
				</div>
			</form>
		)
	}
}

export default connect()(reduxForm<IForm, Pick<IProps, "dispatch">>({ form: "login", validate })(Inputs))
