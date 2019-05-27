import React, { Component } from 'react';
import Button from './Button';

// Class Compontent
export default class Counter extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="Number" style={styleNumber}>
					0
				</div>
				<div className="buttons" style={styleButtons}>
					<button style={styleButton} action="minus">
						-
					</button>
					<button style={styleButton} action="plus">
						+
					</button>
				</div>
			</div>
		);
	}
}

const styleCounterComp = {
	width: '100%',
	maxWidth: '400px',
	margin: '0 auto'
};

const styleNumber = {
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center'
};

const styleButtons = {
	display: 'flex'
};

const styleButton = {
	width: '50%',
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center',
	cursor: 'pointer'
};
