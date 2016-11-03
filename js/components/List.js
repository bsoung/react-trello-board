import React from 'react'
import Card from './Card'
import AddCardForm from './AddCardForm'

const List = (props) => (
	<div className='card-list'>
		<a
			href='#' 
			style={{float: 'right'}} 
			onClick={(e) => {
				e.preventDefault()
				props.onDeleteList()
			}}
		>
			x
		</a>

		<h3 className='list-title'>{props.title}</h3>
		{props.cards.map((card, index) => <Card key={index} 
			card={card} 
			onDeleteCard={props.onDeleteCard} /> )}
		<AddCardForm onAddSubmit={props.onAddSubmit} />
	</div>	
)

module.exports = List