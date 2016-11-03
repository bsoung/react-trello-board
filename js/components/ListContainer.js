import React from 'react'
import Board from './board'
import _ from 'lodash'

const ListContainer = React.createClass({
	getInitialState () {
		return {
			title: 'everyday thoughts',
			lists: [

			]
		}
	},

	onDeleteCard (index, card) {
		let lists = _.cloneDeep(this.state.lists)
		lists[index].cards = lists[index].cards.filter(c => c.name !== card.name)
		this.setState({
			lists: lists
		})
	},

	onDeleteList (index) {
		let lists = _.cloneDeep(this.state.lists)
		lists = lists.filter(l => lists[index] !== l)
		this.setState({
			lists: lists
		})
	},

	onAddSubmit (index, text) {
		let lists = _.cloneDeep(this.state.lists)    // concat/slice shallow copy
		lists[index].cards.push({name: text})
		this.setState({
			lists: lists
		})
	},

	onAddList (title) {
		let lists = _.cloneDeep(this.state.lists)
		let newList = {title: title, cards: []}
		lists.push(newList)
		this.setState({
			lists: lists
		})
	},

	render () {
		return (
			<Board title={this.state.title} 
			lists={this.state.lists} 
			onAddSubmit={this.onAddSubmit} 
			onDeleteCard={this.onDeleteCard}
			onAddList={this.onAddList}
			onDeleteList={this.onDeleteList}
			 />	
		)
	}
})

module.exports = ListContainer;
