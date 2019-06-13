import React, { Component } from 'react';
import BillsApp from './BillsApp';
import { ECDH } from 'crypto';

// Class Compontent
export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div
				id="AddBill"
				className={`${this.props.addBillOpen == true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form>
						<div className="form-group">
							<label htmlFor="business_name">Business Name</label>
							<input type="text" id="business_name" name="business_name" />
						</div>

						<div className="form-group">
							<label htmlFor="amount_due">Amount Due</label>
							<input
								type="number"
								id="amount_due"
								name="amount_due"
								step=".01"
								placeholder="$"
								min="0"
							/>
						</div>

						<button type="submit">Save</button>
					</form>
				</div>
			</div>
		);
	}
}
