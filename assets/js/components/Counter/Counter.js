import React, { Component } from 'react';
import Button from './Button';

// Class Compontent
export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			status: 'manual',
			currentNumber: 0
		};
	}
	componentWillMount() {
		console.log('component will mount started');
	}

	componentDidMount() {
		if (this.props.status == 'auto') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.counterRun();
				}
			);
		}
	}
	clickedPlus = () => {
		this.setState(
			{
				currentNumber: this.state.currentNumber + 1
			},
			() => {
				console.log(this.state);
			}
		);
	};
	clickedMinus = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};
	counterRun = () => {
		setInterval(() => {
			this.setState({
				currentNumber: this.state.currentNumber + 1
			});
		}, 1000);
	};
	render() {
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
			display: this.props.status == 'auto' ? 'none' : 'flex'
		};

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
