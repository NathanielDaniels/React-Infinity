import React, { Component } from 'react';
import Button from './Button';

// Class Compontent
export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			currentNumber: 0
		};
	}
	clickedPlus = () => {
		this.setState({
			currentNumber: this.state.currentNumber + 1
		});
	};
	clickedMinus = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};
	render() {
		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="Number" style={styleNumber}>
					{this.state.currentNumber}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button
						action="minus"
						hoverColor="red"
						backgroundColor="black"
						fontColor="white"
						trigger={this.clickedMinus}
					>
						-
					</Button>
					<Button
						action="plus"
						hoverColor="purple"
						backgroundColor="white"
						fontColor="black"
						trigger={this.clickedPlus}
					>
						+
					</Button>
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
