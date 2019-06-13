import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';

// Class Compontent
export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			allBills: []
		};
	}

	clickedAddBillBtn = () => {
		this.setState({ addBillOpen: !this.state.addBillOpen });
	};

	changeToActive = () => {};

	render() {
		return (
			<div id="BillsApp">
				<Header />
				<AllBills />
				<AddBill addBillOpen={this.state.addBillOpen} />
				<div className="content-background" />
				<FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} />
			</div>
		);
	}
}
