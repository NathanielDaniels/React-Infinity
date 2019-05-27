import React, { Component } from 'react';

// Class Compontent
export default class Button extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="button plus" style={styleButton}>
				+
			</div>
		);
	}
}

const styleButton = {
	width: '50%',
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center',
	cursor: 'pointer'
};
