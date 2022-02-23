// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   romanNumeralConverter.js                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: nprimo <marvin@42.fr>                      +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/02/22 23:14:55 by nprimo            #+#    #+#             //
//   Updated: 2022/02/23 00:02:45 by nprimo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function getRomanQuantity(num) 
{
	let romanValue = [1, 5, 10, 50, 100, 500, 1000];
	let romanQuantity = [];
	let i;
  
	for (i = romanValue.length - 1; i >= 0; i--) 
	{
    	romanQuantity.unshift(Math.floor(num / romanValue[i]));
    	num -= romanQuantity[0] * romanValue[i]; 
	}
	return (romanQuantity);
}

function convertToRoman(num)
{
	let romanNum = "";
	let romanKey = ["I", "V", "X", "L", "C", "D", "M"];
	let	romaQuantity = [];
	let i;
	
	romanQuantity = getRomanQuantity(num);
	for (i = romanKey.length - 1; i >= 0; i--) 
	{
		if (romanQuantity[i] !== 4) {
			romanNum += romanKey[i].repeat(romanQuantity[i]);}
		else
		{
			romanNum += romanKey[i];
			romanNum += romanKey[i + 1];
		}
	}
	return (romanNum);
}

let testNumbers = ['10', '21', '14', '23'];
let i = 0;

for (; i < testNumbers.length; i++)
{
	console.log('For number ' + 
		testNumbers[i] + 
		':' + convertToRoman(testNumbers[i]));
}
