import React from "react"
import injectSheet from "react-jss"
import { Transition, config, SpringBaseProps } from "react-spring"

import Container from "./Container/Container"
import Content from "./Content/Content"
import Life from "./Life/Life"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"
import { IITem } from "./__types/IITem"

import { styles } from "./styles/"

// tslint:disable:no-let
let id = 0
// tslint:disable:prefer-const
let spring = { ...config.default, precision: 0.1 }
let generateMsg = () => ({ key: id += 1, msg: "Message" })

class Alert extends React.PureComponent<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		this.add = this.add.bind(this)
	}
	// tslint:disable-next-line:readonly-array
	public readonly state = { items: [] as IITem[] }

	public readonly cancelMap = new WeakMap()

	public add() {
		this.setState((state: IState) => ({ items: [...state.items, generateMsg()] }))
	}

	public remove(item: { readonly key?: number }) {
		return this.setState((state: IState) => ({
			items: state.items.filter((i: IITem) => i.key !== item.key)
		}))
	}

	public config(_item: IITem, state: string) {
		return state === "leave" ? [{ duration: 4000 }, spring, spring] : spring
	}

	public readonly cancel = (item: IITem) => this.cancelMap.has(item) && this.cancelMap.get(item)()

	public readonly leave = (item: IITem) => async (next: Function, cancel: Function) => {
		this.cancelMap.set(item, cancel)
		await next({ life: "0%" })
		await next({ opacity: 0 })
		await next({ height: 0 }, true) // Inform Keyframes that is is the last frame
	}

	public close(item: IITem) {
		return (e: React.MouseEvent) => {
			e.stopPropagation()

			// tslint:disable-next-line:no-unused-expression
			this.cancelMap.has(item) && this.cancelMap.get(item)()
		}
	}

	public render(): JSX.Element {
		const { classes } = this.props

		return (
			<div className={classes.main} onClick={this.add}>
				Click here
				<br />
				to create notifications
				<Container top={200} position="center">
					<Transition
						native
						items={this.state.items}
						// tslint:disable-next-line:jsx-no-lambda
						keys={(item: IITem) => item.key}
						from={{ opacity: 0, height: 0, life: "100%" }}
						enter={{ opacity: 1, height: "auto" }}
						leave={this.leave}
						onRest={this.remove}
						config={config as SpringBaseProps}
					>
						{(item: IITem) => ({ life, ...props }) => (
							<div style={props}>
								<Content top={200}>
									<Life top={200} life={life} />
									<p>{item.msg}</p>
									<div onClick={this.close(item)}>X</div>
								</Content>
							</div>
						)}
					</Transition>
				</Container>
			</div>
		)
	}
}

export default injectSheet(styles)(Alert)
