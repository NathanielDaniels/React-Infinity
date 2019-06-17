import React, { Component } from 'react';
import update from 'immutability-helper';

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
			allBills: [
				// {
				// 	business_name: 'Netflix',
				// 	amount_due: 13,
				// 	status: 'unpaid'
				// }
			]
		};
	}

	clickedAddBillBtn = () => {
		this.setState({ addBillOpen: !this.state.addBillOpen });
	};

	saveBill = bill => {
		const newBills = update(this.state.allBills, {
			$push: [bill]
		});

		this.setState(
			{
				allBills: newBills,
				addBillOpen: !this.state.addBillOpen
			},
			() => {
				console.log(this.state);
			}
		);
	};

	changeBillStatus = billIndex => {
		const allbills = this.state.allBills;
		const bill = allbills[billIndex];
		bill.status == 'unpaid' ? (bill.status = 'paid') : (bill.status = 'unpaid');

		const newState = update(this.state, {
			allBills: {
				$set: allbills
			}
		});
		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	deleteBill = billIndex => {
		const allBills = this.state.allBills;
		allBills.splice(billIndex, 1);
		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});
		this.setState(newState);
		console.log(billIndex);
	};

	render() {
		return (
			<div id="BillsApp">
				<Header />
				<AllBills
					allBills={this.state.allBills}
					changeBillStatus={this.changeBillStatus}
					deleteBill={this.deleteBill}
				/>
				<AddBill
					addBillOpen={this.state.addBillOpen}
					saveBill={this.saveBill}
				/>
				<div className="content-background" />
				<FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} />
			</div>
		);
	}
}
