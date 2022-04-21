/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cashRegister.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: nprimo <nprimo@student.42lisboa.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/04/18 12:20:45 by nprimo            #+#    #+#             */
/*   Updated: 2022/04/18 12:20:45 by nprimo           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function priceToCashConvert(price, cashType) {
	let cashValues = [
		["ONE HUNDRED", 100],
		["TWENTY", 20],
		["TEN", 10],
		["FIVE", 5],
		["ONE", 1],
		["QUARTER", 0.25],
		["DIME", 0.1],
		["NICKEL", 0.05],
		["PENNY", 0.01],
	]

	for (let i = 0; i < cashValues.length; i++) {
		if (cashValues[i][0] === cashType) {
			return Math.floor(price / cashValues[i][1]);
		}
	}
}

function cashTypeInDrawer(cashType, cid) {
	for (let i = 0; i < cid.length; i++) {
		if (cid[i][0] == cashType) {
			return (priceToCashConvert(cid[i][1], cashType));
		}
	}
}

function getCashTypeChange(changeValue, cashType, cid) {
	let cashValues = {
		"ONE HUNDRED": 100,
		"TWENTY": 20,
		"TEN": 10,
		"FIVE": 5,
		"ONE": 1,
		"QUARTER": 0.25,
		"DIME": 0.1,
		"NICKEL": 0.05,
		"PENNY": 0.01,
	}
	let ctid = cashTypeInDrawer(cashType, cid);
	let requiredChange = priceToCashConvert(changeValue, cashType);

	if (requiredChange > 0 && ctid > 0) {
		return (Math.min(requiredChange, ctid) * cashValues[cashType]);
	}
	return (-1);
}

function checkCashRegister(price, cash, cid) {
	let status = "OPEN";
	let change = [];
	let changeValue = Number(cash - price);
	let cashTypes = [
		"ONE HUNDRED",
		"TWENTY",
		"TEN",
		"FIVE",
		"ONE",
		"QUARTER",
		"DIME",
		"NICKEL",
		"PENNY",
	];

	for (const type of cashTypes) {
		let changeCashType = getCashTypeChange(changeValue, type, cid);

		if (changeCashType !== -1) {
			change.push([type, changeCashType]);
			changeValue = (changeValue - changeCashType).toFixed(2);
		}
	}
	if (change.length === 0 || parseFloat(changeValue) !== 0) {
		change = [];
		status = 'INSUFFICIENT_FUNDS';
	}
	return {'status': status, 'change': change};
}

let cid = [
	["PENNY", 1.01], 
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90], 
	["FIVE", 55], 
	["TEN", 20], 
	["TWENTY", 60], 
	["ONE HUNDRED", 100]
];

console.log(checkCashRegister(3.26, 100, cid)); // error in the penny

// let cid = [
// 	["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100]
// ]
// console.log(checkCashRegister(19.5, 20, cid));
