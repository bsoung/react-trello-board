import React from 'react'
import List from './List'
import AddForm from './AddForm'

const Board = (props) => (
	<div className='board'>
		<h3 className='board-title'>{props.title}</h3>
		<div className='add-form'>
			<h3 className='list-creator-title'>create</h3>
			<AddForm onAddSubmit={props.onAddList} /> {/* re-using the AddCardForm */}
		</div>

		{props.lists.map((list, index) => <List key={index} title={list.title} 
			cards={list.cards} 
			onAddSubmit={props.onAddSubmit.bind(null, index)} 
			onDeleteCard={props.onDeleteCard.bind(null, index)} 
			onDeleteList={props.onDeleteList.bind(null, index)}
			/> 
		)}
	</div>
)

module.exports = Board