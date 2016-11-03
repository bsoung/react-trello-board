import 'babel-polyfill'

const React = require('react')
const ReactDOM = require('react-dom')
const List = require('./components/List')
const Card = require('./components/Card')
const Board = require('./components/Board')
const ListContainer = require('./components/ListContainer')

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<ListContainer />, document.getElementById('app'))
})

