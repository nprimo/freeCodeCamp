/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   palindromeChecker.js                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: nprimo <nprimo@student.42lisboa.com>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/03/03 14:50:35 by nprimo            #+#    #+#             */
/*   Updated: 2022/03/03 14:50:44 by nprimo           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function reverseStr(str) {
	let splitStr = str.split("");
	let reverseSplit = splitStr.reverse();
	return reverseSplit.join("");
  };
  
  function palindrome(str) {
	let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
	return cleanStr == reverseStr(cleanStr);
  }