import React, { Component } from 'react';

// Class Compontent
export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			status: 'manual',
			currentNumber: 0
		};
	}

	clickedBtn = () => {
		console.log('clicked BTN');
	};

	render() {
		return (
			<div id="Immutable-comp">
				<div className="box" />
				<div className="button" onClick={this.clickedBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
