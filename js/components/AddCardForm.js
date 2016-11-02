const React = require('react')

const AddCardForm = React.createClass({
	onSubmit (e) {
		e.preventDefault()

		if(!this.props.onAddSubmit) {
			return
		}

		this.props.onAddSubmit(this.refs.textInput.value)
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

module.exports = AddCardForm