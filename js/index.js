import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/List'
import Card from './components/List'
import Board from './components/Board'
import ListContainer from './components/ListContainer'

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<ListContainer />, document.getElementById('app'))
})

