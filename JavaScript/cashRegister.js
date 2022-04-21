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
	"PENNY": 0.01,
	"NICKEL": 0.05,
	"DIME": 0.1,
	"QUARTER": 0.25,
	"ONE": 1,
	"FIVE": 5,
	"TEN": 10,
	"TWENTY": 20,
	"ONE HUNDRED": 100
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


