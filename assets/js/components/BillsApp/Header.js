import React, { Component } from 'react';

// Class Compontent
export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	clickedBtn = () => {};

	changeToActive = () => {};

	render() {
		return (
			<header id="Header">
				<h2>Bills App</h2>
			</header>
		);
	}
}
