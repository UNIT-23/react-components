import PropTypes from "prop-types"
import React, { Component } from "react"
import useSheet from "react-jss"
import ReactQuill from "react-quill"
import styles from "./styles/"
import "./styles/react-quill.css"

class EditorInput extends Component {
	editorRefHandler (ref) {
		const editor = ref

		editor && editor.focus()
	}

	render () {
		const { classes, ...rest } = this.props

		return (
			<div className={`reactQuillBounds ${classes.editor}`}>
				<ReactQuill
					{...rest}
					modules={{
						toolbar: [
							[{ size: [] }],
							["bold", "italic", "underline", "strike", "blockquote", "link"],
							[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }]
						]
					}}
					formats={["size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link"]}
					placeholder="Say something..."
					bounds=".reactQuillBounds"
					ref={this.editorRefHandler}
				/>
			</div>
		)
	}
}

EditorInput.defaultProps = {
	onFocus : () => {},
	onBlur  : () => {},
	onChange: () => {},
	width   : "95%"
}

EditorInput.propTypes = {
	classes : PropTypes.object,
	height  : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onBlur  : PropTypes.func,
	onChange: PropTypes.func,
	onFocus : PropTypes.func,
	value   : PropTypes.string
}

export default useSheet(styles)(EditorInput)
