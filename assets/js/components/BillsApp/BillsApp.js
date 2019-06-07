import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';

// Class Compontent
export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {};
	}

	clickedBtn = () => {};

	changeToActive = () => {};

	render() {
		return (
			<div id="BillsApp">
				<Header />
				<AllBills />
			</div>
		);
	}
}
