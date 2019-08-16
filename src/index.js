import React, { Component, } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news-list';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: JSON,
		};
	}

	render() {
		const {
			news,
		} = this.state;

		return (
			<div>
				<Header />

				<NewsList
					news={news}
				/>
			</div>
		);	
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
