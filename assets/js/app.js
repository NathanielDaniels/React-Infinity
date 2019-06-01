import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter/Counter';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<Counter status="auto" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));
