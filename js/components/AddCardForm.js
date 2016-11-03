import React from 'react'

// TODO: change to AddForm
const AddForm = React.createClass({
	onSubmit (e) {
		e.preventDefault()

		if(!this.props.onAddSubmit) {
			return
		}

		this.props.onAddSubmit(this.refs.textInput.value)
		this.refs.textInput.value = ''
	},
	render () {
		return (
			<div className="whole-form">
				<form className="form" onSubmit={this.onSubmit}>
					<input type="text" ref="textInput" />
					<div className="button-bg"><button className="button">+</button></div>
				</form>
			</div>
		)
	}
})

module.exports = AddForm