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

function priceToCashConvert(price, cashValues) {
	let result = {}

	for (const cashType in cashValues) {
		result[cashType] = Math.floor(price / cashValues[cashType]);
	}
	return result;
}

let result = priceToCashConvert(23.63, cashValues);

for (key in result) {
	console.log(key, result[key])
}