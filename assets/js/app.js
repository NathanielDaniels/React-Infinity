import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter/Counter';
import Immutable from './Components/Immutable/Immutable';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<Immutable />
				{/* <Counter status="manual" /> */}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));
