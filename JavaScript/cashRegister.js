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

function priceToCashConvert(price, cashValues, cashType) {
	return Math.floor(price / cashValues[cashType]);
}

function getCashTypeInDrawer(cashType, cid) {
	for (let i = 0; i < cid.length; i++) {
		if (cid[i][0] == cashType) {
			return (cid[i][1]);
		}
	}
}

function checkCashRegister(price, cash, cid) {
	let status = "INSUFFICIENT_FUNDS";
	let changeValue = cash - price;
	let change;

	for (cashType in cashValues) {
		// do something
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
  let change = [];

  console.log(getCashTypeInDrawer("FIVE", cid));
