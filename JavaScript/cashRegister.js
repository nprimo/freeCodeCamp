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

cashValues = {
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

function priceToCashConvert(price, cashType) {
	return Math.floor(price / cashValues[cashType]);
}

function cashTypeInDrawer(cashType, cid) {
	for (let i = 0; i < cid.length; i++) {
		if (cid[i][0] == cashType) {
			return (priceToCashConvert(cid[i][1], cashType));
		}
	}
}

function checkCashRegister(price, cash, cid) {
	let status = "OPEN";
	let changeValue = Number(cash - price);
	let change = [];

	for (cashType in cashValues) {
		let ctid = cashTypeInDrawer(cashType, cid);
		let requiredChange = priceToCashConvert(changeValue, cashType);

		if (requiredChange > 0 && ctid > 0) {
			let cashChange = Math.min(requiredChange, ctid) * cashValues[cashType];
			change.push([cashType, cashChange]);
			changeValue = (changeValue - cashChange).toFixed(2);
		}
		if (changeValue === 0)
			break ;
	}
	return {
		"status": status,
		change
	};
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
