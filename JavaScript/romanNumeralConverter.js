// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   romanNumeralConverter.js                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: nprimo <marvin@42.fr>                      +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/02/22 23:14:55 by nprimo            #+#    #+#             //
//   Updated: 2022/02/22 23:36:14 by nprimo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

let romanKey = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

function getRomanQuantity(num) 
{
	let romanValue = [1, 5, 10, 50, 100, 500, 1000];
	let romanQuantity = [];
	let i;
  
	for (i = romanKey.length - 1; i >= 0; i--) 
	{
    	romanQuantity.unshift(Math.floor(num / romanValue[i]));
    	num -= romanQuantity[0] * romanValue[i]; 
	}
	return (romanQuantity);
}

let testNumbers = ['10', '21', '14', '23'];

for (let i = 0; i < testNumbers.length; i++)
{
	console.log('For number ' + 
		testNumbers[i] + 
		':' + convertToRoman(testNumbers[i]));
}
