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

function checkCashRegister(price, cash, cid) {
	let status = "INSUFFICIENT_FUNDS";
	let changeValue = cash - price;
	let change = cid;

	return {
		"status": status,
		change
	};
}


for (key in cashValues) {
	console.log(priceToCashConvert(23.63, cashValues, key))
}