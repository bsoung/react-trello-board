import React from 'react'
// const { foo, bar, zee } = this.props;
// import React, { Component, PropTypes } from 'react';
// class MyComponent extends Component

const Card = (props) => {
	// defensive programming make sure card exists
	// const card = _.get(props, 'cards', {}); 
	// const card = _.get(props.card, 'child.name', {}); //npm install lodash

	const card = props.card ? props.card: {}
	return (
		<div className='card'>
			<a 
				href='#' 
				style={{float: 'right'}}
				onClick= {(e) => {
					e.preventDefault()
					// when click on x, call on onDelete

					props.onDeleteCard(card)
				}}
			>
				x
			</a>
			<p className='card-text'>{card.name}</p>
		</div>
	)
}

module.exports = Card